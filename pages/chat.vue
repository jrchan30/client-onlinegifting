<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="card">
            <div class="card-header border-0">Messages</div>
            <div class="card-body">
              <ul
                class="list-unstyled"
                style="min-height: 300px; overflow-y: scroll"
              >
                <li class="p-2" v-for="message in MESSAGES" :key="message.id">
                  <strong>Jonathan Russell Chan</strong>
                  message text
                </li>
              </ul>
            </div>
            <vs-input
              @keyup.enter="sendMessage"
              class="w-100"
              type="text"
              v-model="messageToSend"
              placeholder="Input your message"
              aria-label="message input field"
            />
          </div>
          <small class="text-muted">User is typing...</small>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      messageToSend: '',
    }
  },
  async created() {
    await this.GET_MESSAGES()
  },
  computed: {
    ...mapGetters({
      MESSAGES: 'messages/MESSAGES',
    }),
  },
  methods: {
    ...mapActions({
      GET_MESSAGES: 'messages/GET_MESSAGES',
    }),
    sendMessage() {
      try {
        this.$axios.$post('messages', { message: this.messageToSend })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style></style>
