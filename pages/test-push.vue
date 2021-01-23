<template>
  <div>
    <notifications-dropdown></notifications-dropdown>
    <NotificationsDemo />
  </div>
</template>

<script>
export default {
  //   components: { Notifications },
  // data: () => ({
  //   total: 0,
  //   notifications: [],
  //   showDropdown: false,
  // }),
  // computed: {
  //   hasUnread() {
  //     return this.total > 0
  //   },
  // },
  // mounted() {
  //   this.fetch()
  //   if (window.Echo) {
  //     this.listen()
  //   }
  //   // console.log(window)
  //   console.log(window.Echos)
  //   // console.log(this.$echo)
  //   this.initDropdown()
  // },
  // methods: {
  //   /**
  //    * Fetch notifications.
  //    *
  //    * @param {Number} limit
  //    */
  //   fetch(limit = 5) {
  //     this.$axios
  //       .get('/notifications', { params: { limit } })
  //       .then(({ data: { total, notifications } }) => {
  //         this.total = total
  //         this.notifications = notifications.map(({ id, data, created }) => {
  //           return {
  //             id: id,
  //             title: data.title,
  //             body: data.body,
  //             created: created,
  //             action_url: data.action_url,
  //           }
  //         })
  //       })
  //   },
  //   /**
  //    * Mark the given notification as read.
  //    *
  //    * @param {Object} notification
  //    */
  //   markAsRead({ id }) {
  //     const index = this.notifications.findIndex((n) => n.id === id)
  //     if (index > -1) {
  //       this.total--
  //       this.notifications.splice(index, 1)
  //       this.$axios.patch(`/notifications/${id}/read`)
  //     }
  //   },
  //   /**
  //    * Mark all notifications as read.
  //    */
  //   markAllRead() {
  //     this.total = 0
  //     this.notifications = []
  //     this.$axios.post('/notifications/mark-all-read')
  //   },
  //   /**
  //    * Listen for Echo push notifications.
  //    */
  //   listen() {
  //     // console.log(this.$echo.private(`App.Models.User.${this.$auth.user.id}`))
  //     window.Echo.private(`App.User.${this.$auth.user.id}`)
  //       .notification((notification) => {
  //         console.log(notification)
  //         this.total++
  //         this.notifications.unshift(notification)
  //       })
  //       .listen('NotificationRead', ({ notificationId }) => {
  //         this.total--
  //         const index = this.notifications.findIndex(
  //           (n) => n.id === notificationId
  //         )
  //         if (index > -1) {
  //           this.notifications.splice(index, 1)
  //         }
  //       })
  //       .listen('NotificationReadAll', () => {
  //         this.total = 0
  //         this.notifications = []
  //       })
  //   },
  //   /**
  //    * Initialize the notifications dropdown.
  //    */
  //   initDropdown() {
  //     const dropdown = $(this.$refs.dropdown)
  //     $(document).on('click', (e) => {
  //       if (
  //         !dropdown.is(e.target) &&
  //         dropdown.has(e.target).length === 0 &&
  //         !$(e.target).parent().hasClass('notification-mark-read')
  //       ) {
  //         dropdown.removeClass('open')
  //       }
  //     })
  //   },
  // },
}
</script>

<style scoped>
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
