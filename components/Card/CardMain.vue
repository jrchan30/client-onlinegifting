<template>
  <div class="row bg-card">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="col-6 col-sm-4 col-lg-3 pb-4 h-100"
    >
      <vs-card>
        <template #title>
          <h5 @click="goTo(item.id)">{{ item.name }}</h5>
        </template>
        <template #img>
          <img
            :src="item.main_image"
            alt="item image"
            class="img-ratio"
            @click="goTo(item.id)"
          />
          <div class="position-top-right">
            <span class="badge badge-pill badge-primary badge-danger"
              ><i class="bx bx-heart"></i>{{ item.likes_count }}</span
            >
            <span
              class="badge badge-pill badge-primary"
              style="background-color: #ffba00"
              ><i class="bx bx-star"></i
              ><span>{{ parseFloat(item.avg_rating).toFixed(1) }}</span></span
            >
          </div>
        </template>
        <template #text>
          <p class="text-truncate" @click="goTo(item.id)">
            {{ item.price }} IDR
          </p>
        </template>
        <template #interactions>
          <vs-button
            :shadow="!item.isLiked"
            :danger="item.isLiked"
            icon
            aria-label="like this item"
            :disabled="$auth.user == null"
            @click="like(item.id, index)"
          >
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button
            shadow
            icon
            aria-label="add to your box or cart"
            :disabled="$auth.user == null"
            @click="add(item.id, index, item.name)"
          >
            <i
              class="text-primary"
              :class="[
                itemType.includes('product') ? 'bx bx-box' : 'fas fa-cart-plus',
              ]"
            ></i>
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CardMain',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemType: {
      type: String,
      default: 'products',
    },
    storeState: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputs: {
        box_id: [],
        qty: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      BOXES: 'boxes/BOXES',
      PRODUCT: 'products/PRODUCT',
      // BUNDLES: 'bundles/BUNDLES',
    }),
  },
  methods: {
    ...mapActions({
      GET_BOXES: 'boxes/GET_BOXES',
      GET_PRODUCT: 'products/GET_PRODUCT',
      // GET_BUNDLES: 'bundles/GET_BUNDLES',
      GET_PRODUCT_INFO: 'products/GET_PRODUCT_INFO',
    }),
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
    likeNotification(title, color, icon) {
      this.$vs.notification({
        duration: 5000,
        progress: 'auto',
        icon,
        color,
        title,
        text: `You can check liked items in your likes page`,
      })
    },
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
    async like(id, idx) {
      let type = ''
      type = this.itemType.includes('product') ? 'product' : 'bundle'
      const likeForm = {
        type,
        id,
      }
      try {
        await this.$axios.$post('/likes', likeForm).then((res) => {
          if (res.status === 204) {
            this.likeNotification(
              'Unliked!',
              '#336699',
              `<i class='bx bxs-face' ></i>`
            )
          } else {
            this.likeNotification(
              'Liked!',
              'success',
              `<i class='bx bx-happy-heart-eyes'></i>`
            )
          }
          this.$store.commit(`${type}s/SET_LIKE`, {
            index: idx,
            storeState: this.storeState,
          })
        })
      } catch (e) {
        this.$swal({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: e,
          timerProgressBar: true,
          timer: 4000,
        })
      }
    },
    async add(id, idx, name) {
      if (this.itemType.includes('product')) {
        await this.GET_BOXES()
        const productInfo = await this.GET_PRODUCT_INFO({
          idx,
          storeState: this.storeState,
        })
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
                  max: productInfo.stock,
                  step: 1,
                },
                inputValue: 1,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value || value <= productInfo.stock) {
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
    goTo(id) {
      this.$router.push(`/${this.itemType}/${id}`)
    },
  },
}
</script>

<style scoped>
.swal2-container {
  margin-top: 25%;
}

.card-bg {
  background-image: url('/image/card-bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
}

.position-top-right {
  position: absolute;
  right: 10px;
  top: 5px;
}
</style>
