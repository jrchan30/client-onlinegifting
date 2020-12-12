<template>
  <div class="pt-5 pb-2">
    <h4
      data-aos="fade-up"
      data-aos-duration="1000"
      class="font-weight-bold custom-color"
    >
      Our Latest Products Added
    </h4>
    <p class="custom-color" data-aos="fade-up" data-aos-duration="1500">
      This is our latest products, click on product's card to see more details
      about the product
    </p>
    <div class="card border-0">
      <div class="card-body px-0">
        <div data-aos="fade-up" data-aos-duration="1700">
          <vs-card-group>
            <vs-card
              v-for="(product, index) in LATEST"
              :key="product.id"
              class="px-1"
            >
              <template #title>
                <h3 class="text-primary text-capitalize">{{ product.name }}</h3>
              </template>
              <template #img>
                <img
                  :src="product.main_image"
                  class="img-ratio"
                  alt="item image"
                />
              </template>
              <template #text>
                <span @click="goTo(product.id)">{{ product.price }} IDR</span>
              </template>
              <template #interactions>
                <vs-button
                  :shadow="!product.isLiked"
                  :danger="product.isLiked"
                  icon
                  aria-label="like this item"
                  :disabled="$auth.user == null"
                  @click="like(product.id, index)"
                >
                  <i class="bx bx-heart"></i>
                </vs-button>
                <vs-button
                  shadow
                  icon
                  aria-label="add to your box or cart"
                  :disabled="$auth.user == null"
                  @click="add(product.id, index)"
                >
                  <i class="text-primary" :class="'bx bx-box'"></i>
                </vs-button>
              </template>
            </vs-card>
          </vs-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
