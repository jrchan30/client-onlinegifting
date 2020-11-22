<template>
  <nav v-if="currentObject.meta" aria-label="...">
    <ul class="pagination justify-content-end mb-0">
      <li class="page-item" :class="{ disabled: !currentObject.links.prev }">
        <a
          class="page-link"
          href="javascript:void(0)"
          tabindex="-1"
          @click="changePage('prev')"
        >
          <i class="fas fa-angle-left"></i>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        v-if="currentObject.meta.current_page !== 1"
        class="page-item"
        @click="changePage('first')"
      >
        <a class="page-link" href="javascript:void(0)">1</a>
      </li>
      <li class="page-item active" style="pointer-events: none">
        <a class="page-link" href="javascript:void(0)" disabled
          >{{ current_page }} <span class="sr-only">(current)</span></a
        >
      </li>
      <li
        v-if="currentObject.meta.last_page !== current_page"
        class="page-item"
        @click="changePage('last')"
      >
        <a class="page-link" href="javascript:void(0)">{{
          currentObject.meta.last_page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !currentObject.links.next }">
        <a
          class="page-link"
          href="javascript:void(0)"
          @click="changePage('next')"
        >
          <i class="fas fa-angle-right"></i>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AdminPagination',
  props: {
    storeAction: {
      type: String,
      default: '',
    },
    storeGetter: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      current_page: 1,
      last_page: '',
      loading: false,
    }
  },
  computed: {
    currentObject() {
      return this.$store.getters[`${this.storeGetter}`]
    },
  },
  methods: {
    async changePage(direction) {
      if (this.loading === true) return false
      this.loading = true
      switch (direction) {
        case 'next':
          this.current_page++
          break
        case 'prev':
          this.current_page--
          break
        case 'first':
          this.current_page = 1
          break
        case 'last':
          this.current_page = this.currentObject.meta.last_page
          break
        default:
          break
      }

      await this.$store.dispatch(this.storeAction, this.current_page)
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
}
</script>

<style></style>
