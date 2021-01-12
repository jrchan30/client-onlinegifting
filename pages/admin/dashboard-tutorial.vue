<template>
  <div class="row">
    <div class="col-12">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Dashboard Tutorial (Help Needed)</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 mt-2">
                <div>
                  <p>
                    Since this is an open source project. You can contribute in
                    creating the tutorial page by creating a pull request in our
                    github repo.
                  </p>
                  <p>
                    Visit our github page
                    <a
                      href="https://github.com/jrchan30/client-onlinegifting"
                      noreferer
                      target="_blank"
                      noopener
                      >here</a
                    >.
                  </p>
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
}
</script>

<style></style>
