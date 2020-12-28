<template>
  <div class="wrapper">
    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="media">
            <vs-avatar circle class="mr-2">
              <img
                alt="Bootstrap Media Preview"
                src="https://i.imgur.com/stD0Q19.jpg"
              />
            </vs-avatar>
            <div class="media-body">
              <div class="row">
                <div class="col-8 d-flex">
                  <small
                    ><b> Maria Smantha </b> -
                    <span class="text-muted"> 2 hours ago</span></small
                  >
                </div>
                <div class="col-4">
                  <div class="float-right reply">
                    <a href="#"
                      ><span><i class="fa fa-reply"></i> reply</span></a
                    >
                  </div>
                </div>
              </div>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
              <div class="media mt-3">
                <vs-avatar circle class="mr-2">
                  <img
                    alt="Bootstrap Media Preview"
                    src="https://i.imgur.com/stD0Q19.jpg"
                  />
                </vs-avatar>
                <div class="media-body">
                  <div class="row">
                    <div class="col-12 d-flex">
                      <small
                        ><b> Maria Smantha </b> -
                        <span class="text-muted"> 2 hours ago</span></small
                      >
                    </div>
                  </div>
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English.
                </div>
              </div>
              <div class="media mt-3">
                <vs-avatar circle class="mr-2">
                  <img
                    alt="Bootstrap Media Preview"
                    src="https://i.imgur.com/stD0Q19.jpg"
                  />
                </vs-avatar>
                <div class="media-body">
                  <div class="row">
                    <div class="col-12 d-flex">
                      <small
                        ><b> Maria Smantha </b> -
                        <span class="text-muted"> 2 hours ago</span></small
                      >
                    </div>
                  </div>
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words.
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
  middleware: 'auth',
  layout: 'default',
}
</script>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
}
.card {
  position: relative;
  display: flex;
  padding: 20px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d2d2dc;
  border-radius: 11px;
  -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
  -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
  box-shadow: 0px 0px 5px 0px rgb(161, 163, 164);
}

.media img {
  width: 60px;
  height: 60px;
}

.reply a {
  text-decoration: none;
}
</style>
