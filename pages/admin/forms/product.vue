<template>
  <div>
    <!-- <div class="container-fluid mt--6"> -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card-wrapper">
          <!-- Input groups -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Input product</h3>
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
                            ><i class="fas fa-signature"></i
                          ></span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Product name"
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
                          placeholder="Description"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                          placeholder="Price"
                          type="text"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text"
                            ><small class="font-weight-bold">IDR</small></span
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
                            ><i class="fas fa-weight-hanging"></i
                          ></span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Weight"
                          type="text"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text"
                            ><small class="font-weight-bold">gr</small></span
                          >
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
                            ><i class="fas fa-cubes"></i
                          ></span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Stock"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
            <div class="card-header">
              <h3 class="mb-0">Images</h3>
            </div>
            <div class="card-body">
              <div
                class="dropzone dropzone-single"
                data-toggle="dropzone"
                data-dropzone-url="http://"
              >
                <div class="fallback">
                  <div class="custom-file">
                    <input
                      id="dropzoneBasicUpload"
                      type="file"
                      class="custom-file-input"
                    />
                    <label class="custom-file-label" for="dropzoneBasicUpload"
                      >Choose file</label
                    >
                  </div>
                </div>

                <!-- <div class="dz-preview dz-preview-single">
                    <div class="dz-preview-cover">
                      <img
                        class="dz-preview-img"
                        src="..."
                        alt="..."
                        data-dz-thumbnail
                      />
                    </div>
                  </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-wrapper">
          <div class="card"></div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-info btn-lg btn-block">
      Block level button
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
}
</script>

<style></style>
