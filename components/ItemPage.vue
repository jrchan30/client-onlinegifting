<template>
  <div>
    <div class="bg-wave h-100 minheight pb-3">
      <div v-if="item.data && !loading">
        <div class="container">
          <!-- <div class="row">
          <div class="col-12">
            <BreadCrumb />
          </div>
        </div> -->

          <!-- <div class="row justify-content-around pb-5">
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

          <div class="col-12 col-md-6">
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
                    <span>{{
                      parseFloat(item.data.avg_rating).toFixed(1)
                    }}</span>
                    <i class="fas fa-star" style="color: #ffdf00"></i> Rated by
                    {{ item.data.reviews.length }} people &bull;
                  </template>
                  <template>
                    Liked by {{ item.data.likes_count }} people
                  </template>
                </p>
              </div>
            </div>

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

            <div class="row py-2">
              <div class="col-12">
                <p class="text-uppercase text-primary font-weight-bold">
                  item DESCRIPTION
                </p>
                <span v-html="item.data.description"></span>
              </div>
            </div>
          </div>
        </div> -->
          <div class="row mb-4">
            <div class="col-12">
              <div class="card border-0">
                <div class="card-body">
                  <h2 class="text-center text-capitalize font-weight-bold">
                    {{ item.data.type }}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div v-if="item.data.images.length > 0" class="col-12 col-md-6">
              <div class="card border-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <img
                        class="w-100 item-image"
                        :src="item.data.images[currentImage.index].url"
                        alt="image unavailable"
                        loading="lazy"
                        @click="
                          expandImage(
                            `${item.data.images[currentImage.index].url}`
                          )
                        "
                      />
                    </div>
                    <template
                      v-if="item.data.images.length > 1"
                      class="col-12 border-top"
                    >
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
              </div>
            </div>
            <template v-else>
              <p class="text-danger col-12 col-md-6">Image cannot be found</p>
            </template>
            <div class="col-12 col-md-6 pt-4 pt-md-0">
              <div class="card border-0">
                <div class="card-body">
                  <h4 class="card-title mb-0">{{ item.data.name }}</h4>
                  <small class="card-subtitle text-muted">
                    <span>{{
                      parseFloat(item.data.avg_rating).toFixed(1)
                    }}</span>
                    <i class="fas fa-star" style="color: #ffdf00"></i> Rated by
                    {{ item.data.reviews.length }} people &bull; Liked by
                    {{ item.data.likes_count }} people
                  </small>
                  <div class="row"></div>
                  <div class="row pt-3">
                    <div class="col-5">Price</div>
                    <b class="col-7">{{ item.data.price }} IDR</b>
                  </div>
                  <div class="row pt-3">
                    <div class="col-5">Weight</div>
                    <b class="col-7">{{ item.data.weight }} gr</b>
                  </div>
                  <template v-if="item.data.detail">
                    <div class="row pt-3">
                      <div class="col-5">Categories</div>
                      <div class="col-7">
                        <b
                          v-for="(category, cIdx) in item.data.detail
                            .categories"
                          :key="cIdx"
                          >{{ category.label }}
                          <b
                            v-if="cIdx + 1 < item.data.detail.categories.length"
                            >,</b
                          >
                        </b>
                      </div>
                    </div>
                    <div v-if="item.data.detail.colour" class="row pt-3">
                      <div class="col-5">Colour</div>
                      <div class="col-7">
                        <v-swatches
                          v-model="item.data.detail.colour"
                          popover-x="left"
                          disabled
                        ></v-swatches>
                      </div>
                    </div>
                    <div v-if="item.data.detail.design" class="row pt-3">
                      <div class="col-5">Design</div>
                      <div class="col-7">
                        <vs-avatar style="height: 44px; width: 44px">
                          <div
                            class="logo"
                            :style="{
                              mask: `url(${
                                getDesignImage(item.data.detail.design).image
                              }) left top`,
                              '-webkit-mask': `url(${
                                getDesignImage(item.data.detail.design).image
                              }) left top`,
                              backgroundColor: item.data.detail.colour,
                            }"
                          ></div>
                        </vs-avatar>
                      </div>
                    </div>
                  </template>
                  <div v-if="item.data.stock" class="row pt-3">
                    <div class="col-5">Stock</div>
                    <b class="col-7">
                      {{ item.data.stock }}
                    </b>
                  </div>
                  <div class="row pt-3">
                    <div class="col-5">Type</div>
                    <b class="col-7 text-capitalize">
                      {{ item.data.type }}
                    </b>
                  </div>
                  <div class="row pt-3">
                    <div class="col-12 d-flex">
                      <vs-button
                        warn
                        gradient
                        block
                        :disabled="!$auth.user"
                        @click="
                          add(item.data.id, item.data.name, item.data.type)
                        "
                      >
                        <span v-if="item.data.type == 'product'">
                          <i class="bx bx-box mr-2"></i> Add to Box
                        </span>
                        <span v-else
                          ><i class="bx bxs-cart-add mr-2"></i> Add to
                          Cart</span
                        >
                      </vs-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-4">
            <div class="col-12">
              <div class="card border-0">
                <div class="card-body">
                  <h4 class="card-title">Item Description</h4>
                  <div class="row pt-3">
                    <div class="col-12" v-html="item.data.description"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sub-Navigation Headers -->
          <div class="row pt-4">
            <div class="col-12 align-middle">
              <div class="card border-0">
                <div class="card-body">
                  <vs-button-group>
                    <vs-button
                      v-if="item.data.type == 'product'"
                      relief
                      colour="#336699"
                      disabled
                    >
                      BUNDLED
                    </vs-button>
                    <vs-button v-else relief colour="#336699">
                      PRODUCTS
                    </vs-button>
                    <vs-button relief colour="#336699" href="#discussions">
                      DISCUSSIONS
                    </vs-button>
                    <vs-button relief colour="#336699" href="#reviews">
                      REVIEWS
                    </vs-button>
                  </vs-button-group>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container pt-4">
          <div class="card border-0">
            <div class="card-body">
              <div id="discussions" class="row">
                <div class="col-md-12 font-weight-bold mb-3">
                  DISCUSSIONS ({{ item.data.discussions.length }})
                </div>
                <div class="col-md-6 mb-2 d-flex">
                  <vs-input
                    v-model="newDiscussion"
                    primary
                    class="flex-grow-1"
                    state="dark"
                    type="text"
                    placeholder="Add Discussion"
                  />
                  <vs-button
                    circle
                    icon
                    color="#7d33ff"
                    relief
                    :disabled="isLoading"
                    @click="addDiscussion()"
                  >
                    <i class="bx bxs-paper-plane"></i>
                  </vs-button>
                </div>
                <template v-if="item.data.discussions.length > 0">
                  <div
                    v-for="(discussion, index) in item.data.discussions"
                    :key="'discussion' + discussion.id"
                    class="col-md-12 py-3 hover rounded"
                  >
                    <div class="media">
                      <div>
                        <vs-avatar circle class="mr-2 shadow my-auto">
                          <img
                            :alt="`${discussion.user.name} profile picture`"
                            :src="discussion.user.profile_pic"
                          />
                        </vs-avatar>
                      </div>
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
                              <button
                                class="reply-button"
                                @click="
                                  addReply(
                                    discussion.id,
                                    index,
                                    discussion.user.name
                                  )
                                "
                              >
                                <span class="text-primary"
                                  ><i class="fa fa-reply"></i> reply</span
                                >
                              </button>
                            </div>
                          </div>
                        </div>
                        {{ discussion.body }}
                        <div
                          v-for="reply in discussion.replies"
                          :key="'reply' + reply.id"
                          class="media mt-3"
                        >
                          <div>
                            <vs-avatar circle class="mr-2">
                              <img
                                :alt="`${reply.user.name} profile picture`"
                                :src="reply.user.profile_pic"
                              />
                            </vs-avatar>
                          </div>
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
                  <div class="col-md-12">
                    <p class="text-muted">There is no discussions</p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="container pt-4 mb-4">
          <div class="card border-0">
            <div class="card-body">
              <div class="row">
                <div id="reviews" class="col-md-12 font-weight-bold mb-3">
                  REVIEWS ({{ item.data.reviews.length }})
                </div>
                <template v-if="item.data.reviews.length > 0">
                  <div
                    v-for="review in item.data.reviews"
                    :key="'review' + review.id"
                    class="col-md-12 py-3 hover rounded"
                  >
                    <div class="media">
                      <vs-avatar circle class="mr-2 shadow">
                        <img
                          :alt="`${review.user.name} profile picture`"
                          :src="review.user.profile_pic"
                        />
                      </vs-avatar>
                      <div class="media-body">
                        <div class="row">
                          <div class="col-12 d-flex">
                            <small
                              ><b> {{ review.user.name }} </b>
                              <span
                                ><i
                                  class="bx bxs-star"
                                  style="color: #ffdf00"
                                ></i
                                >({{ review.rating }})</span
                              >
                              -
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
          </div>
        </div>
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
      newDiscussion: '',
      newReview: '',
      isLoading: false,
    }
  },

  computed: {
    ...mapGetters({
      BOXES: 'boxes/BOXES',
      DESIGNS: 'designs/DESIGNS',
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
    getDesignImage(label) {
      let result = {}
      const design = this.DESIGNS.find((x) => x.label === label)
      if (design) {
        result = {
          id: design.id,
          label: design.label,
          image: design.image,
        }
      } else {
        result = {
          id: 0,
          label: 'none',
          image: '/image/design/none.svg',
        }
      }
      return result
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
    async addDiscussion() {
      try {
        this.isLoading = true
        const form = {
          type: this.item.data.type,
          id: this.item.data.id,
          body: this.newDiscussion,
        }
        // if (type === 'discussion') {
        const res = await this.$axios.$post('/discussions', form)
        // this.item.data.discussions.unshift(res.data)
        this.$store.commit(`${this.item.data.type}s/ADD_DISCUSSION`, res.data)
        // } else {
        //   form.rating = 5
        //   const res = await this.$axios.$post('/reviews', form)
        //   this.item.data.reviews.unshift(res.data)
        // }
        this.newDiscussion = ''
      } catch (e) {
        alert(e)
      } finally {
        this.isLoading = false
      }
    },
    addReply(discussionId, discussionIdx, name) {
      this.$swal({
        title: `Reply to ${name.substring(0, 18)}`,
        input: 'text',
        inputLabel: 'Your reply',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          const form = {
            discussion_id: discussionId,
            body: result.value,
          }
          const res = await this.$axios.$post('/replies', form)
          const replyToUpdate = {
            response: res.data,
            discussionIdx,
          }
          this.$store.commit(`${this.item.data.type}s/ADD_REPLY`, replyToUpdate)
        }
      })
    },
    // const form = {
    //   id,
    //   body:
    // }
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
.hover {
  transition: 0.4s;
}
.hover:hover {
  background-color: #e4e4e4;
}

.item-image-bottom:hover {
  transform: scale(1.1);
}

.active-image {
  box-shadow: 0px 8px 25px -3px rgba(0, 0, 0, 1);
}

/* input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

textarea:focus,
input:focus {
  outline: none;
} */

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

.media img {
  width: 60px;
  height: 60px;
}

/* .reply a {
  text-decoration: none;
} */
.reply-button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.vs-button-group {
  justify-content: left;
}

.logo {
  width: 44px;
  height: 44px;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}
</style>
