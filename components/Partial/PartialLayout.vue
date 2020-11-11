<template>
  <div>
    <!-- Sidenav -->
    <AdminSideNav />
    <!-- Main content -->
    <div id="panel" class="main-content">
      <!-- Topnav -->
      <AdminTopNav />

      <AdminHeader />
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <slot name="content"></slot>
        <AdminFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
