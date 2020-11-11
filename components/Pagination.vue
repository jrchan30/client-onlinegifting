<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#"><i class="fas fa-arrow-left"></i></a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{{ currentPage }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#"><i class="fas fa-arrow-right"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    changePage(direction) {},
  },
}
</script>

<style></style>
