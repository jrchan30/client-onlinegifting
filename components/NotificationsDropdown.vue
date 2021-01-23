<template>
  <div class="dropdown dropdown-notifications">
    Notifications ({{ total }})
    <button class="dropdown-toggle" @click="showDropdown = true">
      <i
        :data-count="total"
        class="fa fa-bell notification-icon"
        :class="{ 'hide-count': !hasUnread }"
      />
    </button>

    <div class="dropdown-container" v-show="showDropdown">
      <div class="dropdown-toolbar">
        <div v-show="hasUnread" class="dropdown-toolbar-actions">
          <a href="#" @click.prevent="markAllRead">Mark all as read</a>
        </div>

        <h3 class="dropdown-toolbar-title">Notifications ({{ total }})</h3>
      </div>

      <div v-if="hasUnread" class="dropdown-footer text-center">
        <a href="#" @click.prevent="fetch(null)">View All</a>
      </div>
    </div>
    <div>
      <div
        class="notification"
        v-for="(notification, index) in notifications"
        :key="index"
      >
        <div class="media">
          <div class="media-left">
            <div class="media-object">
              <!-- <img src="/notification-icon.png" /> -->
            </div>
          </div>

          <div class="media-body">
            <a
              href="#"
              class="notification-mark-read"
              title="Mark as read"
              @click.prevent="markAsRead"
            >
              <i class="fa fa-times" aria-hidden="true" />
            </a>

            <strong class="notification-title">
              <a :href="notification.action_url">{{ notification.title }}</a>
            </strong>

            <p class="notification-desc">
              {{ notification.body }}
            </p>

            <div class="notification-meta">
              <small class="timestamp">
                <!-- <timeago :since="notification.created" :auto-update="30" /> -->
              </small>
            </div>
          </div>
        </div>
      </div>
      <!-- <Notifications
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
          @read="markAsRead(notification)"
        /> -->

      <li v-if="!hasUnread" class="notification">
        You don't have any unread notifications.
      </li>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
// import Notification from './Notification'
// import Notifications from './Notifications.vue'
export default {
  //   components: { Notifications },
  data: () => ({
    total: 0,
    notifications: [],
    showDropdown: false,
  }),
  computed: {
    hasUnread() {
      return this.total > 0
    },
  },
  mounted() {
    this.fetch()
    if (window.Echo) {
      this.listen()
    }
    this.initDropdown()
  },
  methods: {
    /**
     * Fetch notifications.
     *
     * @param {Number} limit
     */
    fetch(limit = 5) {
      this.$axios
        .get('/notifications', { params: { limit } })
        .then(({ data: { total, notifications } }) => {
          this.total = total
          this.notifications = notifications.map(({ id, data, created }) => {
            return {
              id: id,
              title: data.title,
              body: data.body,
              created: created,
              action_url: data.action_url,
            }
          })
        })
    },
    /**
     * Mark the given notification as read.
     *
     * @param {Object} notification
     */
    markAsRead({ id }) {
      const index = this.notifications.findIndex((n) => n.id === id)
      if (index > -1) {
        this.total--
        this.notifications.splice(index, 1)
        this.$axios.patch(`/notifications/${id}/read`)
      }
    },
    /**
     * Mark all notifications as read.
     */
    markAllRead() {
      this.total = 0
      this.notifications = []
      this.$axios.post('/notifications/mark-all-read')
    },
    /**
     * Listen for Echo push notifications.
     */
    listen() {
      console.log(window.Echo)
      window.Echo.private(`App.User.${this.$auth.user.id}`)
        .notification((notification) => {
          console.log(notification)
          this.total++
          this.notifications.unshift(notification)
        })
        .listen('NotificationRead', ({ notificationId }) => {
          this.total--
          const index = this.notifications.findIndex(
            (n) => n.id === notificationId
          )
          if (index > -1) {
            this.notifications.splice(index, 1)
          }
        })
        .listen('NotificationReadAll', () => {
          this.total = 0
          this.notifications = []
        })
    },
    listen() {
      window.Echo.private(`App.User.${this.$auth.user.id}`).listen(
        'WebsocketDemoEvent',
        (res) => {
          console.log(res)
        }
      )
    },
    /**
     * Initialize the notifications dropdown.
     */
    initDropdown() {
      const dropdown = $(this.$refs.dropdown)
      $(document).on('click', (e) => {
        if (
          !dropdown.is(e.target) &&
          dropdown.has(e.target).length === 0 &&
          !$(e.target).parent().hasClass('notification-mark-read')
        ) {
          dropdown.removeClass('open')
        }
      })
    },
  },
}
</script>
