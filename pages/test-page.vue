<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="card card-shadow border-0">
            <div class="card-body pt-2 pb-3">
              <div class="row justify-content-between">
                <div class="col-5 text-center">
                  <div class="bg-success mt-n4 rounded">
                    <i
                      class="fas fa-file-invoice-dollar text-light fa-2x py-4"
                    ></i>
                  </div>
                </div>
                <div class="col text-right">
                  <small class="text-muted">Revenue</small>
                  <h4>Rp.135.000</h4>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted border-0">
              <i class="far fa-calendar-alt mr-2"></i>24 jam lalu
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-shadow:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
