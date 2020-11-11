<template>
  <div>
    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
      <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
        <li class="breadcrumb-item">
          <nuxt-link to="/admin"><i class="fas fa-home"></i></nuxt-link>
        </li>

        <div
          v-for="crumb in breadcrumb"
          :key="crumb.link"
          tag="li"
          class="breadcrumb-item"
        >
          <nuxt-link :to="crumb.link">{{ crumb.title }}</nuxt-link>
        </div>

        <li class="breadcrumb-item active" aria-current="page">
          {{ title }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: 'far fa-question-circle',
    },
    mainLink: {
      type: String,
      default: '/admin',
    },
    breadcrumb: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
