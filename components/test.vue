<template>
  <div class="col-xl-8 order-xl-1">
    <div class="row">
      <div class="col-lg-6">
        <div class="card bg-gradient-info border-0">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5
                  class="card-title text-uppercase text-muted mb-0 text-white"
                >
                  Total traffic
                </h5>
                <span class="h2 font-weight-bold mb-0 text-white">350,897</span>
              </div>
              <div class="col-auto">
                <div
                  class="icon icon-shape bg-white text-dark rounded-circle shadow"
                >
                  <i class="ni ni-active-40"></i>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-white mr-2"
                ><i class="fa fa-arrow-up"></i> 3.48%</span
              >
              <span class="text-nowrap text-light">Since last month</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card bg-gradient-danger border-0">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5
                  class="card-title text-uppercase text-muted mb-0 text-white"
                >
                  Performance
                </h5>
                <span class="h2 font-weight-bold mb-0 text-white">49,65%</span>
              </div>
              <div class="col-auto">
                <div
                  class="icon icon-shape bg-white text-dark rounded-circle shadow"
                >
                  <i class="ni ni-spaceship"></i>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-white mr-2"
                ><i class="fa fa-arrow-up"></i> 3.48%</span
              >
              <span class="text-nowrap text-light">Since last month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">Edit profile</h3>
          </div>
          <div class="col-4 text-right">
            <a href="#!" class="btn btn-sm btn-primary">Settings</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <form>
          <h6 class="heading-small text-muted mb-4">User information</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-username"
                    >Username</label
                  >
                  <input
                    id="input-username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    value="lucky.jesse"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-email"
                    >Email address</label
                  >
                  <input
                    id="input-email"
                    type="email"
                    class="form-control"
                    placeholder="jesse@example.com"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-first-name"
                    >First name</label
                  >
                  <input
                    id="input-first-name"
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    value="Lucky"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-last-name"
                    >Last name</label
                  >
                  <input
                    id="input-last-name"
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    value="Jesse"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <!-- Address -->
          <h6 class="heading-small text-muted mb-4">Contact information</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-control-label" for="input-address"
                    >Address</label
                  >
                  <input
                    id="input-address"
                    class="form-control"
                    placeholder="Home Address"
                    value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-city"
                    >City</label
                  >
                  <input
                    id="input-city"
                    type="text"
                    class="form-control"
                    placeholder="City"
                    value="New York"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-country"
                    >Country</label
                  >
                  <input
                    id="input-country"
                    type="text"
                    class="form-control"
                    placeholder="Country"
                    value="United States"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-country"
                    >Postal code</label
                  >
                  <input
                    id="input-postal-code"
                    type="number"
                    class="form-control"
                    placeholder="Postal code"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <!-- Description -->
          <h6 class="heading-small text-muted mb-4">About me</h6>
          <div class="pl-lg-4">
            <div class="form-group">
              <label class="form-control-label">About Me</label>
              <textarea
                rows="4"
                class="form-control"
                placeholder="A few words about you ..."
              >
A beautiful premium dashboard for Bootstrap 4.</textarea
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
