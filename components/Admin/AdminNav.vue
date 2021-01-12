<template>
  <div>
    <!-- Sidenav -->
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
                      <nuxt-link
                        tag="a"
                        to="/admin/forms/bundle"
                        class="nav-link"
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
                      <nuxt-link
                        tag="a"
                        to="/admin/tables/users"
                        class="nav-link"
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
                        to="/admin/tables/users"
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
    <!-- Main content -->
    <div id="panel" class="main-content">
      <!-- Topnav -->
      <nav
        class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom"
      >
        <div class="container-fluid">
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <!-- Search form -->
            <form
              id="navbar-search-main"
              class="navbar-search navbar-search-light form-inline mr-sm-3"
            >
              <div class="form-group mb-0">
                <div
                  class="input-group input-group-alternative input-group-merge"
                >
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="fas fa-search"></i
                    ></span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <button
                type="button"
                class="close"
                data-action="search-close"
                data-target="#navbar-search-main"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </form>
            <!-- Navbar links -->
            <ul class="navbar-nav align-items-center ml-md-auto">
              <li class="nav-item d-xl-none">
                <!-- Sidenav toggler -->
                <div
                  class="pr-3 sidenav-toggler sidenav-toggler-dark"
                  data-action="sidenav-pin"
                  data-target="#sidenav-main"
                >
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
              <li class="nav-item d-sm-none">
                <a
                  class="nav-link"
                  href="#"
                  data-action="search-show"
                  data-target="#navbar-search-main"
                >
                  <i class="ni ni-zoom-split-in"></i>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ni ni-bell-55"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
                >
                  <div class="px-3 py-3">
                    <h6 class="text-sm text-muted m-0">
                      You have
                      <strong class="text-primary">13</strong> notifications.
                    </h6>
                  </div>
                  <div class="list-group list-group-flush">
                    <a href="#!" class="list-group-item list-group-item-action">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="../../assets/img/theme/team-1.jpg"
                            class="avatar rounded-circle"
                          />
                        </div>
                        <div class="col ml--2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="mb-0 text-sm">John Snow</h4>
                            </div>
                            <div class="text-right text-muted">
                              <small>2 hrs ago</small>
                            </div>
                          </div>
                          <p class="text-sm mb-0">
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#!" class="list-group-item list-group-item-action">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="../../assets/img/theme/team-5.jpg"
                            class="avatar rounded-circle"
                          />
                        </div>
                        <div class="col ml--2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="mb-0 text-sm">John Snow</h4>
                            </div>
                            <div class="text-right text-muted">
                              <small>3 hrs ago</small>
                            </div>
                          </div>
                          <p class="text-sm mb-0">
                            A new issue has been reported for Argon.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href="#!"
                    class="dropdown-item text-center text-primary font-weight-bold py-3"
                    >View all</a
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ni ni-ungroup"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"
                >
                  <div class="row shortcuts px-4">
                    <nuxt-link to="/" class="col-4 shortcut-item">
                      <span
                        class="shortcut-media avatar rounded-circle bg-gradient-red"
                      >
                        <i class="fas fa-home"></i>
                      </span>
                      <small>Home</small>
                    </nuxt-link>
                    <nuxt-link to="/products" class="col-4 shortcut-item">
                      <span
                        class="shortcut-media avatar rounded-circle bg-gradient-orange"
                      >
                        <i class="fas fa-boxes"></i>
                      </span>
                      <small>Products</small>
                    </nuxt-link>
                    <nuxt-link to="/bundles" class="col-4 shortcut-item">
                      <span
                        class="shortcut-media avatar rounded-circle bg-gradient-info"
                      >
                        <i class="ni ni-credit-card"></i>
                      </span>
                      <small>Bundles</small>
                    </nuxt-link>
                    <nuxt-link to="/categories" class="col-4 shortcut-item">
                      <span
                        class="shortcut-media avatar rounded-circle bg-gradient-green"
                      >
                        <i class="ni ni-books"></i>
                      </span>
                      <small>Categories</small>
                    </nuxt-link>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav align-items-center ml-auto ml-md-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link pr-0"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="media align-items-center">
                    <span class="avatar avatar-sm rounded-circle">
                      <img
                        alt="Image placeholder"
                        src="/assets/img/theme/team-4.jpg"
                      />
                    </span>
                    <div class="media-body ml-2 d-none d-lg-block">
                      <span class="mb-0 text-sm font-weight-bold"
                        >John Snow</span
                      >
                    </div>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="dropdown-header noti-title">
                    <h6 class="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="#!" class="dropdown-item">
                    <i class="ni ni-single-02"></i>
                    <span>My profile</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#!" class="dropdown-item">
                    <i class="ni ni-user-run"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Header -->
      <!-- <div class="header bg-primary pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">Form elements</h6>
                <nav
                  aria-label="breadcrumb"
                  class="d-none d-md-inline-block ml-md-4"
                >
                  <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li class="breadcrumb-item">
                      <a href="#"><i class="fas fa-home"></i></a>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Forms</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Form elements
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-sm btn-neutral">New</a>
                <a href="#" class="btn btn-sm btn-neutral">Filters</a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <AdminHeader />
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row">
          <Nuxt />
        </div>
        <AdminFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
