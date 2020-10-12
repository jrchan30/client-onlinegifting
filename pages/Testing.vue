<template>
  <div class="login-page sidebar-collapse">
    <nav
      class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent"
      color-on-scroll="400"
    >
      <div class="container">
        <div class="dropdown button-dropdown">
          <a
            href="#pablo"
            class="dropdown-toggle"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            <span class="button-bar"></span>
            <span class="button-bar"></span>
            <span class="button-bar"></span>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-header">Dropdown header</a>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">One more separated link</a>
          </div>
        </div>
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="https://demos.creative-tim.com/now-ui-kit/index.html"
            rel="tooltip"
            title="Designed by Invision. Coded by Creative Tim"
            data-placement="bottom"
            target="_blank"
          >
            Online Gifting
          </a>
          <button
            class="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar top-bar"></span>
            <span class="navbar-toggler-bar middle-bar"></span>
            <span class="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navigation"
          data-nav-image="/img/blurred-image-1.jpg"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="../index.html">Back to Kit</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/creativetimofficial/now-ui-kit/issues"
                >Have an issue?</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                rel="tooltip"
                title="Follow us on Twitter"
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="d-lg-none d-xl-none">Twitter</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                rel="tooltip"
                title="Like us on Facebook"
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="d-lg-none d-xl-none">Facebook</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                rel="tooltip"
                title="Follow us on Instagram"
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="d-lg-none d-xl-none">Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="content">
      <div class="container">
        <div class="col-md-4 ml-auto mr-auto">
          <div class="card card-login card-plain">
            <form class="form" method="" action="">
              <div class="card-header text-center">
                <div class="logo-container">
                  <img src="/image/SVG-OnlineGifting-Logo.svg" alt="" />
                </div>
              </div>
              <div class="card-body">
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name..."
                  />
                </div>
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Last Name..."
                    class="form-control"
                  />
                </div>
              </div>
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Get Started</a
                >
                <div class="pull-left">
                  <h6>
                    <a href="#pablo" class="link">Create Account</a>
                  </h6>
                </div>
                <div class="pull-right">
                  <h6>
                    <a href="#pablo" class="link">Need Help?</a>
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
