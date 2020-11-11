<template>
  <div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-wrapper">
            <!-- Input groups -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Input groups</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <!-- Input groups with icon -->
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fas fa-user"></i
                            ></span>
                          </div>
                          <input
                            class="form-control"
                            placeholder="Your name"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fas fa-envelope"></i
                            ></span>
                          </div>
                          <input
                            class="form-control"
                            placeholder="Email address"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge">
                          <input
                            class="form-control"
                            placeholder="Location"
                            type="text"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text"
                              ><i class="fas fa-map-marker"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge">
                          <input
                            class="form-control"
                            placeholder="Password"
                            type="password"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text"
                              ><i class="fas fa-eye"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Input groups with icon -->
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fas fa-credit-card"></i
                            ></span>
                          </div>
                          <input
                            class="form-control"
                            placeholder="Payment method"
                            type="text"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text"
                              ><small class="font-weight-bold">USD</small></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fas fa-globe-americas"></i
                            ></span>
                          </div>
                          <input
                            class="form-control"
                            placeholder="Phone number"
                            type="text"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text"
                              ><i class="fas fa-phone"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Dropdowns -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Dropdowns</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <select class="form-control" data-toggle="select">
                    <option>Alerts</option>
                    <option>Badges</option>
                    <option>Buttons</option>
                    <option>Cards</option>
                    <option>Forms</option>
                    <option>Modals</option>
                  </select>
                </form>
              </div>
            </div>
            <!-- Datepicker -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Datepicker</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          class="form-control-label"
                          for="exampleDatepicker"
                          >Datepicker</label
                        >
                        <input
                          class="form-control datepicker"
                          placeholder="Select date"
                          type="text"
                          value="06/20/2018"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="row input-daterange datepicker align-items-center"
                  >
                    <div class="col">
                      <div class="form-group">
                        <label class="form-control-label">Start date</label>
                        <input
                          class="form-control"
                          placeholder="Start date"
                          type="text"
                          value="06/18/2018"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label class="form-control-label">End date</label>
                        <input
                          class="form-control"
                          placeholder="End date"
                          type="text"
                          value="06/22/2018"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Text editor -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Text editor</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <div
                    data-toggle="quill"
                    data-quill-placeholder="Quill WYSIWYG"
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card-wrapper">
            <!-- Tags -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Tags</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <input
                    type="text"
                    class="form-control"
                    value="Bucharest, Cluj, Iasi, Timisoara, Piatra Neamt"
                    data-toggle="tags"
                  />
                </form>
              </div>
            </div>
            <!-- Toggle buttons -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Toggle buttons</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <label class="custom-toggle">
                    <input type="checkbox" />
                    <span class="custom-toggle-slider rounded-circle"></span>
                  </label>
                  <label class="custom-toggle">
                    <input type="checkbox" checked />
                    <span
                      class="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    ></span>
                  </label>
                  <label class="custom-toggle custom-toggle-default">
                    <input type="checkbox" checked />
                    <span
                      class="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    ></span>
                  </label>
                  <label class="custom-toggle custom-toggle-danger">
                    <input type="checkbox" checked />
                    <span
                      class="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    ></span>
                  </label>
                  <label class="custom-toggle custom-toggle-warning">
                    <input type="checkbox" checked />
                    <span
                      class="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    ></span>
                  </label>
                  <label class="custom-toggle custom-toggle-success">
                    <input type="checkbox" checked />
                    <span
                      class="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    ></span>
                  </label>
                  <label class="custom-toggle custom-toggle-info">
                    <input type="checkbox" checked />
                    <span
                      class="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    ></span>
                  </label>
                </form>
              </div>
            </div>
            <!-- Sliders -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Sliders</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <form>
                  <!-- Slider -->
                  <div class="input-slider-container">
                    <div
                      id="input-slider"
                      class="input-slider"
                      data-range-value-min="100"
                      data-range-value-max="500"
                    ></div>
                    <div class="row mt-3">
                      <div class="col-6">
                        <span
                          id="input-slider-value"
                          class="range-slider-value"
                          data-range-value-low="100"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <!-- Range slider -->
                  <div class="mt-5">
                    <div
                      id="input-slider-range"
                      data-range-value-min="100"
                      data-range-value-max="500"
                    ></div>
                    <div class="row">
                      <div class="col-6">
                        <span
                          id="input-slider-range-value-low"
                          class="range-slider-value value-low"
                          data-range-value-low="200"
                        ></span>
                      </div>
                      <div class="col-6 text-right">
                        <span
                          id="input-slider-range-value-high"
                          class="range-slider-value value-high"
                          data-range-value-high="400"
                        ></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Dropzone -->
            <div class="card">
              <!-- Card header -->
              <div class="card-header">
                <h3 class="mb-0">Dropzone</h3>
              </div>
              <!-- Card body -->
              <div class="card-body">
                <!-- Single -->
                <div
                  class="dropzone dropzone-single mb-3"
                  data-toggle="dropzone"
                  data-dropzone-url="http://"
                >
                  <div class="fallback">
                    <div class="custom-file">
                      <input
                        id="projectCoverUploads"
                        type="file"
                        class="custom-file-input"
                      />
                      <label class="custom-file-label" for="projectCoverUploads"
                        >Choose file</label
                      >
                    </div>
                  </div>
                  <div class="dz-preview dz-preview-single">
                    <div class="dz-preview-cover">
                      <img
                        class="dz-preview-img"
                        src=""
                        alt="..."
                        data-dz-thumbnail
                      />
                    </div>
                  </div>
                </div>
                <!-- Multiple -->
                <div
                  class="dropzone dropzone-multiple"
                  data-toggle="dropzone"
                  data-dropzone-multiple
                  data-dropzone-url="http://"
                >
                  <div class="fallback">
                    <div class="custom-file">
                      <input
                        id="customFileUploadMultiple"
                        type="file"
                        class="custom-file-input"
                        multiple
                      />
                      <label
                        class="custom-file-label"
                        for="customFileUploadMultiple"
                        >Choose file</label
                      >
                    </div>
                  </div>
                  <ul
                    class="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush"
                  >
                    <li class="list-group-item px-0">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <div class="avatar">
                            <img
                              class="avatar-img rounded"
                              src=""
                              alt="..."
                              data-dz-thumbnail
                            />
                          </div>
                        </div>
                        <div class="col ml--3">
                          <h4 class="mb-1" data-dz-name></h4>
                          <p class="small text-muted mb-0" data-dz-size>...</p>
                        </div>
                        <div class="col-auto">
                          <div class="dropdown">
                            <a
                              href="#"
                              class="dropdown-ellipses dropdown-toggle"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fe fe-more-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a href="#" class="dropdown-item" data-dz-remove>
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  // head() {
  //   return {
  //     scripts: [

  //     ],
  //   }
  // },
}
</script>

<style></style>
