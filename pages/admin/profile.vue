<template>
  <div class="row">
    <div class="col-12">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Admin Profile</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 mt-2">
                <div>
                  Admin profile page is currently unavailable. Please contact
                  root/super user to change details regarding your profile.
                  <ul>
                    <li>Whatsapp: +6281514329538</li>
                    <li>Line: @russ30</li>
                    <li>Instagram: @jrussellchan</li>
                    <li>Email: jrussellchan2000@gmail.com</li>
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
}
</script>

<style></style>
