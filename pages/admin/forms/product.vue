<template>
  <div>
    <!-- <div class="container-fluid mt--6"> -->
    <form @submit.prevent="formSubmit" @keyup.enter.prevent>
      <div class="row">
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Input product</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <!--Main Fields Loop -->
                  <div
                    v-for="(field, index) in fields"
                    :key="index"
                    :class="field.class"
                  >
                    <div class="form-group">
                      <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i :class="field.icon"></i
                          ></span>
                        </div>
                        <input
                          v-model="field.value"
                          class="form-control"
                          :placeholder="field.placeholder"
                          type="text"
                        />
                        <template v-if="field.appendable">
                          <div class="input-group-append">
                            <span class="input-group-text"
                              ><small class="font-weight-bold">{{
                                field.appendable_value
                              }}</small></span
                            >
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                  <!--End Main Fields Loop -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Tags</h3>
              </div>
              <div class="card-body">
                <input
                  type="text"
                  class="form-control"
                  value="Bucharest, Cluj, Iasi, Timisoara, Piatra Neamt"
                  data-toggle="tags"
                />
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
      </div>
      <button type="button" class="btn btn-info btn-lg btn-block">
        Block level button
      </button>
    </form>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  data() {
    return {
      fields: {
        product_name: {
          class: 'col-md-6',
          placeholder: 'Product name',
          icon: 'fas fa-signature',
          appendable: false,
          value: '',
        },
        price: {
          placeholder: 'Price',
          class: 'col-md-6',
          icon: 'fas fa-credit-card',
          appendable: true,
          appendable_value: 'IDR',
          value: 0,
        },
        weight: {
          class: 'col-md-6',
          placeholder: 'Weight',
          icon: 'fas fa-weight-hanging',
          appendable: true,
          appendable_value: 'gr',
          value: 100,
        },
        stock: {
          class: 'col-md-6',
          placeholder: 'Stock',
          icon: 'fas fa-cubes',
          appendable: false,
          value: 0,
        },
        description: {
          class: 'col-md-12',
          placeholder: 'Description',
          icon: 'fas fa-align-left',
          appendable: false,
          value: '',
        },
      },
      tags: '',
    }
  },
}
</script>

<style></style>
