<template>
  <nav
    id="sidenav-main"
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
  >
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header d-flex align-items-center">
        <nuxt-link tag="a" to="/admin" class="navbar-brand">
          <img
            src="/image/OnlineGiftingTextEdited.png"
            class="navbar-brand-img"
            alt="..."
          />
        </nuxt-link>
        <div class="ml-auto">
          <!-- Sidenav toggler -->
          <div
            class="sidenav-toggler d-none d-xl-block"
            data-action="sidenav-unpin"
            data-target="#sidenav-main"
          >
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div id="sidenav-collapse-main" class="collapse navbar-collapse">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link tag="a" class="nav-link active" to="/admin">
                <i class="ni ni-shop text-primary"></i>
                <span class="nav-link-text">Dashboards</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#navbar-forms"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="navbar-forms"
              >
                <i class="ni ni-single-copy-04 text-pink"></i>
                <span class="nav-link-text">Forms</span>
              </a>
              <div id="navbar-forms" class="collapse">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      tag="a"
                      to="/admin/forms/product"
                      class="nav-link"
                      >Product</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link tag="a" to="/admin/forms/bundle" class="nav-link"
                      >Bundle</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <nuxt-link
                tag="a"
                to="/admin/transactions"
                class="nav-link active"
                href=""
              >
                <i class="ni ni-credit-card text-primary"></i>
                <span class="nav-link-text">Transactions</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#navbar-tables"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="navbar-tables"
              >
                <i class="ni ni-align-left-2 text-default"></i>
                <span class="nav-link-text">Tables</span>
              </a>
              <div id="navbar-tables" class="collapse">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link tag="a" to="/admin/tables/users" class="nav-link"
                      >Users</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      tag="a"
                      to="/admin/tables/products"
                      class="nav-link"
                      >Products</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      tag="a"
                      to="/admin/tables/bundles"
                      class="nav-link"
                      >Bundles</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <!-- Divider -->
          <hr class="my-3" />
          <!-- Heading -->
          <h6 class="navbar-heading p-0 text-muted">Informations</h6>
          <!-- Navigation -->
          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <nuxt-link to="/admin/dashboard-tutorial" class="nav-link">
                <i class="ni ni-spaceship"></i>
                <span class="nav-link-text">Dashboard Tutorial</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/admin/admin-list" class="nav-link">
                <i class="ni ni-bullet-list-67"></i>
                <span class="nav-link-text">List of Admins</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
