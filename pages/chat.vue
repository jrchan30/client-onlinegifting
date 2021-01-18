<template>
  <div class="bg-wave h-100 minheight">
    <div class="container-fluid pb-4">
      <div class="row mb-4 justify-content-center">
        <div class="col-12 col-sm-10">
          <vs-alert color="warn" class="text-dark">
            <template #icon>
              <i class="bx bxs-chat"></i>
            </template>
            <template #title> Live Chat Warning </template>
            Our admin/customer support team will not ask you for your
            credentials.
            <b>Please don't share any private information</b> whilst using our
            live chat feature.
          </vs-alert>
        </div>
      </div>
      <div class="row justify-content-center mb-4 px-2">
        <div class="col-12 col-sm-10 col-md-10 px-0">
          <div
            id="chat-area"
            class="px-4 pt-5 pb-2 rounded-top chat-box bg-white"
          >
            <template v-if="!initialLoad">
              <vs-button
                id="scrollToBottom"
                circle
                icon
                primary
                flat
                href="#bottom"
              >
                <i class="bx bx-chevron-down"></i>
              </vs-button>
              <div
                class="row"
                :class="{
                  'justify-content-end': message.user_id === $auth.user.id,
                }"
                v-for="(message, index) in ROOM.data.messages"
                :key="index"
              >
                <div class="col-9 col-md-6">
                  <div
                    class="media w-100 mb-3"
                    :class="{ 'ml-auto': message.user_id === $auth.user.id }"
                  >
                    <img
                      v-if="$auth.user.id !== message.user_id"
                      src="/image/bx-user.svg"
                      alt="user"
                      width="50"
                      class="rounded-circle d-none d-sm-block"
                    />
                    <div
                      class="media-body"
                      :class="{ 'ml-3': message.user_id !== $auth.user.id }"
                    >
                      <div
                        class="rounded py-2 px-3 mb-2"
                        :class="{
                          'bg-light': message.user_id !== $auth.user.id,
                          'bg-primary': message.user_id === $auth.user.id,
                        }"
                      >
                        <p
                          class="text-small mb-0"
                          style="
                            -ms-word-break: break-all;
                            word-break: break-all;
                            word-break: break-word;
                          "
                          :class="{
                            'text-muted': message.user_id !== $auth.user.id,
                            'text-white': message.user_id === $auth.user.id,
                          }"
                        >
                          {{ message.message }}
                        </p>
                      </div>
                      <p
                        class="small text-muted"
                        :class="{
                          'text-right': message.user_id === $auth.user.id,
                        }"
                      >
                        {{ message.created_at }}
                        <span v-if="message.user_id !== $auth.user.id"
                          >| {{ message.user.name }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <span id="bottom"></span>
            </template>
          </div>

          <!-- Typing area -->
          <form
            @submit.prevent="sendMessage"
            @keyup.enter.prevent
            class="bg-light rounded-bottom"
          >
            <div class="input-group">
              <input
                type="text"
                v-model="messageToSend"
                placeholder="Type a message"
                aria-describedby="button-addon2"
                class="form-control border-0 py-4 bg-light"
              />
              <div class="input-group-append">
                <button id="button-addon2" type="submit" class="btn btn-link">
                  <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { now } from '~/static/assets/vendor/moment/moment'

export default {
  layout: 'default',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      messageToSend: '',
      room: null,
      initialLoad: false,
    }
  },
  async created() {
    try {
      this.initialLoad = true
      await this.$store.dispatch('rooms/GET_ROOM', this.$auth.user.room_id)
    } finally {
      this.initialLoad = false
    }
    const laravelEcho = Echo.channel(`chat.${this.$auth.user.room_id}`)
    laravelEcho.on('MessageSent', (res) => {
      console.log(res)
      if (res.message.user_id !== this.$auth.user.id) {
        const msg = res.message
        console.log(res)
        const toUpdate = {
          data: {
            id: msg.id,
            message: msg.message,
            room_id: msg.room_id,
            user: msg.user,
            user_id: msg.user_id,
            created_at: new Date().toLocaleString(),
          },
        }
        this.$store.commit('rooms/ADD_MESSAGE', toUpdate)
      }
    })
  },

  computed: {
    ...mapGetters({
      ROOM: 'rooms/ROOM',
    }),
  },
  methods: {
    ...mapActions({
      GET_ROOM: 'room/GET_ROOM',
    }),
    scrollToBottom() {
      var objDiv = document.getElementById('chat-area')
      objDiv.scrollTop = objDiv.scrollHeight
    },
    async sendMessage() {
      try {
        const res = await this.$axios.$post('/messages', {
          message: this.messageToSend,
        })
        this.$store.commit('rooms/ADD_MESSAGE', res)
      } catch (e) {
        console.log(e)
      }
    },
  },
  beforeDestroy() {
    Echo.leave(`chat.${this.$auth.user.room_id}`)
  },
}
</script>

<style scoped>
.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: 450px;
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}

#scrollToBottom {
  position: absolute;
}
</style>
