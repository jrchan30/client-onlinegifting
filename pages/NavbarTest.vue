<template>
  <div class="container-fluid">
    <div class="row">
      <nav
        class="navbar navbar-expand navbar-light bg-light justify-content-between w-100"
      >
        <div class="col-3 d-none d-md-flex">
          <div class="d-none d-md-flex">
            <a href="/" class="navbar-brand"
              ><img
                src="/image/OnlineGiftingTextEdited.svg"
                width="100vh"
                alt=""
            /></a>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link">Categories</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <InputField
            class="ml-3 my-auto w-100 mx-auto pb-0"
            :errors="errors"
            :keyValue="searchForm.val"
            v-on:new-input="searchForm.val = $event"
            :icon="searchForm.icon"
            :placeholder="searchForm.placeholder"
            :inputType="searchForm.type"
          />
        </div>
        <div class="col-3">
          <ul class="navbar-nav float-right list-inline">
            <li class="nav-item text-center">
              <a href="#" class="nav-link"
                ><span class="fa fa-user"></span
                ><span class="d-none d-lg-inline px-1">Sign Up</span></a
              >
            </li>
            <li class="nav-item text-center" id="login-btn">
              <a href="#" class="nav-link"
                ><span class="fas fa-sign-in-alt"></span
                ><span class="d-none d-lg-inline px-1">Log In</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        type: 'text',
        val: '',
        placeholder: 'Search...',
        icon: 'fas fa-search',
      },
      errors: {},
    }
  },
}
</script>

<style scoped>
/* .header-logo {
  width: 20vh;
} */
</style>
