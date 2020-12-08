<template>
  <CardSkeleton>
    <template v-slot:title>
      <h4 class="font-weight-bold custom-color">Our Latest Products Added</h4>
      <p class="custom-color">
        This is our latest products, click on product's card to see more details
        about the product
      </p>
    </template>
    <template v-slot:body>
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
            <img :src="product.main_image" class="img-ratio" alt="item image" />
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
    </template>
  </CardSkeleton>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    try {
      await this.GET_LATEST()
    } catch (e) {
      console.log(e)
    }
    this.current = this.LATEST[0]
  },
  data() {
    return {
      current: {},
      inputs: {
        box_id: [],
        qty: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      LATEST: 'products/LATEST',
      BOXES: 'boxes/BOXES',
      PRODUCT: 'products/PRODUCT',
    }),
  },
  methods: {
    changeDescription(index) {
      this.current = this.LATEST[index]
    },
    ...mapActions({
      GET_BOXES: 'boxes/GET_BOXES',
      GET_PRODUCT: 'products/GET_PRODUCT',
      GET_LATEST: 'products/GET_LATEST',
      GET_PRODUCT_INFO: 'products/GET_PRODUCT_INFO',
    }),
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
    async like(id, idx) {
      const type = 'product'
      const likeForm = {
        type,
        id,
      }
      try {
        await this.$axios.$post('/likes', likeForm).then((res) => {
          if (res.status === 204) {
            this.$swal({
              customClass: {
                container: 'mt-5 pt-3',
              },
              position: 'top',
              icon: 'success',
              toast: true,
              title: 'Unliked',
              showConfirmButton: false,
              timer: 2000,
            })
          } else {
            this.$swal({
              customClass: {
                container: 'mt-5 pt-3',
              },
              position: 'top',
              icon: 'success',
              toast: true,
              title: 'Liked',
              showConfirmButton: false,
              timer: 2000,
            })
          }
          this.$store.commit(`${type}s/SET_LIKE`, {
            index: idx,
            storeState: 'latest',
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
    async add(id, idx) {
      await this.GET_BOXES()
      const productInfo = await this.GET_PRODUCT_INFO({
        idx,
        storeState: 'latest',
      })
      try {
        const { value: index } = await this.$swal({
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
        })
        this.inputs.box_id = this.BOXES.data[index].id

        const { value: qty } = await this.$swal({
          title: 'Input quantity',
          input: 'range',
          inputLabel:
            'Before payment, you might need to rechoose if product exceeds available stocks at that moment',
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
        })

        const allProducts = {}
        this.BOXES.data[index].products.map((x) => {
          allProducts[x.id] = { quantity: x.quantity }
        })
        allProducts[id] = { quantity: qty }

        await this.$axios.$patch(`/boxes/${this.inputs.box_id}`, {
          allProducts: JSON.stringify(allProducts),
        })
        alert('success')
      } catch (e) {
        alert(e)
      } finally {
        this.clear()
      }
    },
    goTo(id) {
      this.$router.push(`/${this.itemType}/${id}`)
    },
  },
}
</script>

<style></style>
