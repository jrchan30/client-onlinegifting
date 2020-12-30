<template>
  <div>
    <div v-if="item.data">
      <div class="container pb-4">
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
                    :src="item.data.images[currentImage.index].url"
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
                    :key="'image' + index"
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
                    {{ item.data.avg_rating }} <i class="fas fa-star"></i> ({{
                      item.data.reviews.length
                    }}) &bull;
                  </template>
                  <template>
                    Liked by {{ item.data.likes_count }} people
                  </template>
                </p>
              </div>
            </div>
            <!-- End Name, Rating, Likes, Seen -->

            <!-- Price -->
            <div class="row border-bottom py-3">
              <div class="col-12">
                <span
                  class="text-uppercase text-muted font-weight-bold text-size"
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
                <div
                  class="text-uppercase text-muted font-weight-bold text-size"
                >
                  <vs-button
                    warn
                    gradient
                    :disabled="!$auth.user"
                    @click="add(item.data.id, item.data.name, item.data.type)"
                  >
                    <span v-if="item.data.type == 'product'">
                      <i class="bx bx-box mr-2"></i> Add to Box
                    </span>
                    <span v-else
                      ><i class="bx bxs-cart-add mr-2"></i> Add to Cart</span
                    >
                  </vs-button>
                </div>
              </div>
            </div>
            <!-- End Quantity -->

            <!-- Description -->
            <div class="row py-2">
              <div class="col-12">
                <p class="text-uppercase text-primary font-weight-bold">
                  item DESCRIPTION
                </p>
                <span v-html="item.data.description"></span>
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

        <!-- Our Policy -->
      </div>

      <!-- Discussions -->
      <div class="wrapper">
        <div class="container mt-3">
          <div class="row pb-4 border-bottom">
            <div class="col-md-12 font-weight-bold mb-3">
              DISCUSSIONS ({{ item.data.discussions.length }})
            </div>
            <template v-if="item.data.discussions.length > 0">
              <div
                v-for="discussion in item.data.discussions"
                :key="'discussion' + discussion.id"
                class="col-md-12"
              >
                <div class="media">
                  <vs-avatar circle class="mr-2 shadow">
                    <img
                      alt="Bootstrap Media Preview"
                      :src="discussion.user.profile_pic"
                    />
                  </vs-avatar>
                  <div class="media-body">
                    <div class="row">
                      <div class="col-8 d-flex">
                        <small
                          ><b> {{ discussion.user.name }} </b> -
                          <span class="text-muted">{{
                            discussion.created_at
                          }}</span></small
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
                    {{ discussion.body }}
                    <div
                      v-for="reply in discussion.replies"
                      :key="'reply' + reply.id"
                      class="media mt-3"
                    >
                      <vs-avatar circle class="mr-2">
                        <img
                          alt="Bootstrap Media Preview"
                          :src="reply.user.profile_pic"
                        />
                      </vs-avatar>
                      <div class="media-body">
                        <div class="row">
                          <div class="col-12 d-flex">
                            <small
                              ><b> {{ reply.user.name }} </b> -
                              <span class="text-muted">
                                {{ reply.created_at }}</span
                              ></small
                            >
                          </div>
                        </div>
                        {{ reply.body }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div>
                <p class="text-muted">There is no discussions</p>
              </div>
            </template>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 font-weight-bold mb-3">
              REVIEWS ({{ item.data.reviews.length }})
            </div>
            <template v-if="item.data.reviews.length > 0">
              <div
                v-for="review in item.data.reviews"
                :key="'review' + review.id"
                class="col-md-12"
              >
                <div class="media">
                  <vs-avatar circle class="mr-2 shadow">
                    <img
                      alt="Bootstrap Media Preview"
                      :src="review.user.profile_pic"
                    />
                  </vs-avatar>
                  <div class="media-body">
                    <div class="row">
                      <div class="col-8 d-flex">
                        <small
                          ><b> {{ review.user.name }} </b> -
                          <span class="text-muted">{{
                            review.created_at
                          }}</span></small
                        >
                      </div>
                    </div>
                    {{ review.body }}
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="col-md-12">
                <p class="text-muted">There is no reviews</p>
              </div>
            </template>
          </div>
        </div>
        <!-- End Discussions -->

        <!-- Reviews -->
        <!-- <div class="row py-3 mt-5">
        <span class="col-12 font-weight-bold"
          >REVIEWS ({{ item.data.reviews.length }})</span
        >
      </div>
      <template v-if="item.data.reviews.length > 0">
        <div v-for="review in item.data.reviews" :key="'review' + review.id">
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
      </template> -->
        <!-- End Reviews -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false,
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
      inputs: {
        box_id: [],
        qty: [],
      },
    }
  },

  computed: {
    ...mapGetters({
      BOXES: 'boxes/BOXES',
    }),
  },

  methods: {
    ...mapActions({
      GET_BOXES: 'boxes/GET_BOXES',
      GET_PRODUCT: 'products/GET_PRODUCT',
      // GET_PRODUCT_INFO: 'products/GET_PRODUCT_INFO',
    }),
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
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
    addBoxNotification(productName, boxName, qty) {
      const boxNotif = this.$vs.notification({
        duration: 10000,
        progress: 'auto',
        icon: `<i class='bx bx-box'></i>`,
        color: '#336699',
        title: 'Click here to see your boxes!',
        text: `Nice... Product <strong>${productName}</strong> is successfuly added to <strong>${boxName}</strong> box with quantity of <strong>${qty}</strong>`,
        onClick: () => {
          this.$router.push('/boxes')
          boxNotif.close()
        },
      })
    },
    addCartNotification(name) {
      const boxNotif = this.$vs.notification({
        duration: 10000,
        progress: 'auto',
        icon: `<i class='bx bx-cart'></i>`,
        color: '#336699',
        title: 'Click here to see your cart!',
        text: `Nice... <strong>${name}</strong> is successfuly added to your cart`,
        onClick: () => {
          this.$router.push('/carts')
          boxNotif.close()
        },
      })
    },
    async add(id, name, type) {
      if (type.includes('product')) {
        await this.GET_BOXES()
        try {
          this.$swal({
            title: 'Choose box to add to',
            input: 'select',
            inputOptions: this.BOXES.data.map((x) => {
              return x.name
            }),
            inputPlaceholder: 'Select a box',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value) {
                  resolve()
                } else {
                  resolve('You need to choose one')
                }
              })
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.inputs.box_id = this.BOXES.data[result.value].id

              this.$swal({
                title: 'Input quantity',
                input: 'range',
                inputLabel:
                  'Before payment, you might need to rechoose if product exceeds available stocks at that moment',
                showCancelButton: true,
                inputAttributes: {
                  min: 1,
                  max: this.item.data.stock,
                  step: 1,
                },
                inputValue: 1,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value || value <= this.item.data.stock) {
                      resolve()
                    } else {
                      resolve('You need to choose one')
                    }
                  })
                },
              }).then(async (result2) => {
                if (result2.isConfirmed) {
                  const allProducts = {}
                  this.BOXES.data[result.value].products.map((x) => {
                    allProducts[x.id] = { quantity: x.quantity }
                  })
                  allProducts[id] = { quantity: result2.value }

                  await this.$axios.$patch(`/boxes/${this.inputs.box_id}`, {
                    allProducts: JSON.stringify(allProducts),
                  })
                  this.addBoxNotification(
                    name,
                    this.BOXES.data[result.value].name,
                    result2.value
                  )
                }
              })
            }
          })
        } catch (e) {
          alert(e)
        } finally {
          this.clear()
        }
      } else {
        try {
          await this.$axios.post(`/carts`, {
            type: 'bundle',
            ids: [id],
          })
          this.addCartNotification(name)
        } catch (e) {
          alert(e)
        } finally {
          this.clear()
        }
      }
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
  object-fit: contain;
  max-height: 310px;
  max-width: 550px;
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

.wrapper {
  display: grid;
  place-items: center;
}
/* .card {
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
} */

.media img {
  width: 60px;
  height: 60px;
}

.reply a {
  text-decoration: none;
}
</style>
