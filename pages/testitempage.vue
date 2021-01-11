<template>
  <div>
    <div class="container">
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
                      expandImage(`${item.data.images[currentImage.index].url}`)
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
                <span>{{ parseFloat(item.data.avg_rating).toFixed(1) }}</span>
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
                      v-for="(category, cIdx) in item.data.detail.categories"
                      :key="cIdx"
                      >{{ category.label }}
                      <b v-if="cIdx + 1 < item.data.detail.categories.length"
                        >,</b
                      >
                    </b>
                  </div>
                </div>
              </template>
              <div v-if="item.data.stock" class="row pt-3">
                <div class="col-5">Stock</div>
                <div class="col-7">
                  {{ item.data.stock }}
                </div>
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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      item: {
        data: {
          id: 1,
          type: 'bundle',
          price: '1.999.000',
          weight: 950,
          description: '<p>ini test bundle</p>',
          name: 'Test bundle',
          images: [
            {
              id: 2,
              path: 'zuk4dQrdf7I1ikKe4dymU8RgnobzpiLDyrN56B6t.jpeg',
              url:
                'https://online-gifting.s3.ap-southeast-1.amazonaws.com/product_images/2/zuk4dQrdf7I1ikKe4dymU8RgnobzpiLDyrN56B6t.jpeg',
            },
            {
              id: 11,
              path: 'GBvPiaVlBckMeHjeyq60hV1kK4g8iRj3rVWN7FZC.jpeg',
              url:
                'https://online-gifting.s3.ap-southeast-1.amazonaws.com/product_images/11/GBvPiaVlBckMeHjeyq60hV1kK4g8iRj3rVWN7FZC.jpeg',
            },
            {
              id: 1,
              path: '4rF9136nECazxJzbSeDg9uf8tQB9uizOd3rFPIRC.jpeg',
              url:
                'https://online-gifting.s3.ap-southeast-1.amazonaws.com/product_images/1/4rF9136nECazxJzbSeDg9uf8tQB9uizOd3rFPIRC.jpeg',
            },
          ],
          detail: {
            id: 2,
            colour: '#336699',
            design: 'none',
            image: {
              id: 51,
              path: 'tgK3dnWQuDpuizGvbKIx3VXIiWmOkmC0UAP2Tijf.png',
              url:
                'https://online-gifting.s3.ap-southeast-1.amazonaws.com/bundle_images/1/tgK3dnWQuDpuizGvbKIx3VXIiWmOkmC0UAP2Tijf.png',
            },
            categories: [{ id: 53, label: 'Shoes', children: null }],
          },
          reviews: [
            {
              id: 7,
              body: 'rate bundle',
              rating: 3,
              user_id: 2,
              paid_product_id: null,
              paid_bundle_id: 2,
              user: {
                id: 2,
                name: 'Jonathan Russell Chan',
                email: 'jrussellchan2000@gmail.com',
                username: 'russ30',
                detail: {
                  id: 2,
                  type: 'customer',
                  city: null,
                  province: null,
                  address: 'Jln. Pulo Nangka Timur 1B/10',
                  phone_num: '081514329539',
                  image: null,
                },
                type: 'customer',
                created_at: '6 hours ago',
                profile_pic: '/image/bx-user.svg',
              },
              created_at: '4 hours ago',
              type: 'App\\Models\\Bundle',
              item_name: 'Test bundle',
            },
            {
              id: 9,
              body: 'nice test bundle review2',
              rating: 2,
              user_id: 2,
              paid_product_id: null,
              paid_bundle_id: 4,
              user: {
                id: 2,
                name: 'Jonathan Russell Chan',
                email: 'jrussellchan2000@gmail.com',
                username: 'russ30',
                detail: {
                  id: 2,
                  type: 'customer',
                  city: null,
                  province: null,
                  address: 'Jln. Pulo Nangka Timur 1B/10',
                  phone_num: '081514329539',
                  image: null,
                },
                type: 'customer',
                created_at: '6 hours ago',
                profile_pic: '/image/bx-user.svg',
              },
              created_at: '33 minutes ago',
              type: 'App\\Models\\Bundle',
              item_name: 'Test bundle',
            },
          ],
          discussions: [],
          likes_count: 0,
          avg_rating: 2.5,
        },
      },
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
</style>
