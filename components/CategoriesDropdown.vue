<template>
  <div v-show="isShowCategories" class="w-100 categories-dropdown">
    <i class="fas fa-times fa-2x icon-times" @click="onClickToggle"></i>
    <div class="row m-auto border-bottom text-white w-75">
      <h3 class="mb-0 mx-auto p-1">Categories List</h3>
    </div>
    <div class="row justify-content-around m-auto px-4 pb-5">
      <nuxt-link
        to="/home"
        v-for="category in CATEGORIES"
        :key="category.id"
        class="d-inline p-2 text-decoration-none category-bubble mt-2"
      >
        {{ category.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      isShowCategories: '',
    }
  },
  async fetch() {
    await this.GET_CATEGORIES()
  },
  computed: {
    ...mapGetters({
      CATEGORIES: 'categories/CATEGORIES',
    }),
  },
  methods: {
    ...mapActions({
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
    }),
    onClickToggle(event) {
      this.$emit('clicked', false)
    },
  },
}
</script>

<style scoped>
.icon-times {
  position: absolute;
  color: white;
  right: 0;
  margin-right: 1vw;
  margin-top: 0.5vw;
  cursor: pointer;
}

.categories-dropdown {
  position: absolute;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
}

a {
  font-size: 10px;
  background: white;
  border-radius: 10px;
}

.category-bubble {
  color: black;
}

.category-bubble:hover {
  background-color: #336699;
  color: white;
}
</style>
