<template>
  <div v-if="item.data">
    <div class="container mt-5 pb-4">
      <div class="row">
        <div class="col-12">
          <BreadCrumb />
        </div>
      </div>

      <div class="row justify-content-around pb-5">
        <!-- Image -->
        <template v-if="item.data.images.length > 0">
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-12 py-2 border-bottom">
                <img
                  class="w-100 item-image"
                  :src="item.data.images[this.currentImage.index].url"
                  alt="image unavailable"
                  loading="lazy"
                  @click="
                    expandImage(`${item.data.images[currentImage.index].url}`)
                  "
                />
              </div>
              <template v-if="item.data.images.length > 1" class="col-12">
                <div
                  v-for="(image, index) in item.data.images"
                  :key="image.id"
                  class="col-3 pr-0 mt-2"
                >
                  <img
                    class="w-100 item-image-bottom"
                    :class="{
                      'active-image': index == currentImage.index,
                    }"
                    :src="image.url"
                    alt="Image unavailable"
                    loading="lazy"
                    @click="activeImage(index)"
                  />
                </div>
              </template>
            </div>
          </div>
        </template>
        <template v-else>
          <p class="text-danger col-12 col-md-6">Image cannot be found</p>
        </template>
        <!-- End Image -->

        <div class="col-12 col-md-6">
          <!-- Name, Rating, Likes, Seen -->
          <div class="row pt-3">
            <div class="col-12">
              <div class="text-uppercase font-weight-bold">
                {{ item.data.name }}
              </div>
            </div>
          </div>
          <div class="row border-bottom pb-3">
            <div class="col-12">
              <p class="font-weight-bold text-muted mb-0 text-size">
                <template>
                  4 <i class="fas fa-star"></i> ({{ item.data.reviews.length }})
                  &bull;
                </template>
                <template>
                  Liked by {{ item.data.likes_count }} people &bull;
                </template>
                <template> Seen by 100 people </template>
              </p>
            </div>
          </div>
          <!-- End Name, Rating, Likes, Seen -->

          <!-- Price -->
          <div class="row border-bottom py-3">
            <div class="col-12">
              <span class="text-uppercase text-muted font-weight-bold text-size"
                >PRICE</span
              >
              <span
                id="price-value"
                class="font-weight-bold text-secondary ml-3"
                >Rp.{{ item.data.price }}</span
              >
            </div>
          </div>
          <!-- End Price -->

          <!-- Quantity -->
          <div class="row border-bottom py-3">
            <div class="col-12">
              <span class="text-uppercase text-muted font-weight-bold text-size"
                >Quantity</span
              >
              <span class="font-weight-bold text-primary ml-3">
                <i class="fas fa-minus-circle"></i>
                <input
                  v-model="quantity"
                  type="number"
                  min="1"
                  :max="item.data.stock"
                  oninput="validity.valid||(value='');"
                />
                <i class="fas fa-plus-circle"></i>
              </span>
              <span class="text-muted text-size">Min. purchase of 1</span>
            </div>
          </div>
          <!-- End Quantity -->

          <!-- Description -->
          <div class="row py-2">
            <div class="col-12">
              <span class="text-uppercase text-primary font-weight-bold"
                >item DESCRIPTION</span
              >
              <p>{{ item.data.description }}</p>
            </div>
          </div>
          <!-- End Description -->
        </div>
      </div>

      <!-- Sub-Navigation Headers -->
      <div class="row mt-5 sticky-top">
        <div class="col-12 border-top border-bottom align-middle">
          <ul class="list-inline my-auto">
            <li
              id="discussions"
              class="list-inline-item py-3 mr-2 mr-md-4 border-primary navDiv"
              :class="{ 'border-bottom': navigation == 1 }"
              @click="navigation = 1"
            >
              DISCUSSIONS
            </li>
            <li
              id="reviews"
              class="list-inline-item py-3 mr-2 mr-md-4 border-primary navDiv"
              :class="{ 'border-bottom': navigation == 2 }"
              @click="navigation = 2"
            >
              REVIEWS
            </li>
            <li
              id="policy"
              class="list-inline-item py-3 mr-2 mr-md-4 border-primary navDiv"
              :class="{ 'border-bottom': navigation == 3 }"
              @click="navigation = 3"
            >
              BUNDLED
            </li>
          </ul>
        </div>
      </div>
      <!-- End Sub-Navigation Headers -->

      <!-- Discussions -->
      <div class="row py-3">
        <span class="col-12 font-weight-bold"
          >DISCUSSIONS ({{ item.data.discussions.length }})</span
        >
      </div>
      <template v-if="item.data.discussions.length > 0">
        <div v-for="discussion in item.data.discussions" :key="discussion.id">
          <div class="row py-2 border-bottom">
            <div
              class="col-4 col-md-2 text-size text-truncate border-right font-weight-bold"
            >
              {{ discussion.user.name }}
              <p class="text-muted mb-0">{{ discussion.created_at }}</p>
            </div>

            <div class="col-8 col-md-10">
              <p class="mb-0">{{ discussion.body }}</p>
              <!-- Replies -->

              <template v-if="discussion.replies.length > 0">
                <div class="row py-1">
                  <span class="col-12 font-weight-bold"
                    >Replies ({{ discussion.replies.length }})</span
                  >
                </div>
                <div v-for="reply in discussion.replies" :key="reply.id">
                  <div class="row py-2 border-bottom">
                    <div
                      class="col-4 col-md-2 text-size text-truncate border-right font-weight-bold"
                    >
                      {{ reply.user.name }}
                      <p class="text-muted mb-0">{{ reply.created_at }}</p>
                    </div>
                    <div class="col-8 col-md-10">
                      <p class="mb-0">{{ reply.body }}</p>
                    </div>
                  </div>
                </div>
              </template>
              <!-- End Replies -->
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div>
          <p class="text-muted">There is no discussions</p>
        </div>
      </template>
      <!-- End Discussions -->

      <!-- Reviews -->
      <div class="row py-3 mt-5">
        <span class="col-12 font-weight-bold"
          >REVIEWS ({{ item.data.reviews.length }})</span
        >
      </div>
      <template v-if="item.data.reviews.length > 0">
        <div v-for="review in item.data.reviews" :key="review.id">
          <div class="row py-2">
            <div
              class="col text-size text-truncate border-right font-weight-bold"
            >
              {{ review.user.name }}
              <p class="text-muted mb-0">{{ review.created_at }}</p>
            </div>

            <div class="col-10">
              <p class="mb-0">{{ review.body }}</p>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div>
          <p class="text-muted">There is no reviews</p>
        </div>
      </template>
      <!-- End Reviews -->

      <!-- Our Policy -->
    </div>
    <div class="w-100 container-fluid bg-white shadow-lg fixed-bottom">
      <div class="row w-100 py-2 align-items-center justify-content-center">
        <div class="col-5 col-md-2 text-center">
          <span class="font-weight-bold text-primary">
            <i class="fas fa-minus-circle"></i>
            <input
              v-model="quantity"
              type="number"
              min="1"
              :max="item.data.stock"
              oninput="validity.valid||(value='');"
            />
            <i class="fas fa-plus-circle"></i>
          </span>
        </div>
        <div class="col-5 col-md-2">
          <span class="text-dark">Total</span>
          <p class="font-weight-bold text-secondary mb-0">
            Rp.{{ item.data.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currentImage: {
        index: 0,
      },
      quantity: 1,
      isDecreaseable: false,
      totalPrice: 0,
      navigation: undefined,
    }
  },

  methods: {
    activeImage(index) {
      this.currentImage.index = index
    },
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        width: 1000,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Custom image',
      })
    },
  },
}
</script>

<style scoped>
.list-inline-item {
  cursor: pointer;
}

#price-value {
  font-size: 30px;
}

.item-image {
  border-radius: 10px;
  cursor: pointer;
}

.item-image-bottom {
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.4s;
}

.item-image-bottom:hover {
  transform: scale(1.1);
}

.active-image {
  box-shadow: 0px 8px 25px -3px rgba(0, 0, 0, 1);
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

textarea:focus,
input:focus {
  outline: none;
}

input {
  text-align: center;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid gray;
  width: 50px;
}
</style>
