<template>
  <div>
    <div class="row" v-if="!$fetchState.pending">
      <div class="col-4" v-for="(room, index) in ROOMS" :key="index">
        <nuxt-link class="card" :to="`/admin/chats/${room.id}`">
          <div class="card-header">{{ room.user.name }}</div>
          <div class="card-body">
            {{ room.messages[room.messages.length - 1].message }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  // data() {
  //   return {
  //     rooms: null,
  //   }
  // },
  async fetch() {
    await this.GET_ROOMS()
  },
  computed: {
    ...mapGetters({
      ROOMS: 'rooms/ROOMS',
    }),
  },
  methods: {
    ...mapActions({
      GET_ROOMS: 'rooms/GET_ROOMS',
    }),
    // async sendMessage() {
    //   try {
    //     const res = await this.$axios.$post('/messages', {
    //       message: this.messageToSend,
    //       room_id: this.$route.params.id,
    //     })
    //     console.log(res)
    //     this.$store.commit('rooms/ADD_MESSAGE', res)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
  },
}
</script>

<style></style>
