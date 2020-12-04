<template>
  <div class="row">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="col-6 col-sm-4 col-lg-3 pb-4"
    >
      <vs-card>
        <template #title>
          <h3 @click="goTo(item.id)">{{ item.name }}</h3>
        </template>
        <template #img>
          <img
            :src="item.main_image"
            alt="No image"
            class="img-ratio"
            @click="goTo(item.id)"
          />
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
            :disabled="$auth.user == null"
            @click="like(item.id, index)"
          >
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button
            shadow
            icon
            :disabled="$auth.user == null"
            @click="add(item.id)"
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
  // async fetch() {
  //   await this.GET_BOXES()
  // },
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
    }),
  },
  methods: {
    ...mapActions({
      GET_BOXES: 'boxes/GET_BOXES',
      GET_PRODUCT: 'products/GET_PRODUCT',
    }),
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
    async add(id) {
      if (this.itemType.includes('product')) {
        await this.GET_BOXES()
        await this.$store.dispatch('products/GET_PRODUCT', id)
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
          const { value: quantity } = await this.$swal({
            title: 'Input quantity',
            input: 'range',
            inputLabel:
              'Before payment, you might need to rechoose if product exceeds available stocks at that moment',
            inputAttributes: {
              min: 1,
              max: this.PRODUCT.data.stock,
              step: 1,
            },
            inputValue: 1,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value || value <= this.PRODUCT.data.stock) {
                  resolve()
                } else {
                  resolve('You need to choose one')
                }
              })
            },
          })
          this.inputs.qty = quantity

          const form = {
            products: [id],
            quantity: [Number(this.inputs.qty)],
          }
          await this.$axios.$patch(`/boxes/${this.inputs.box_id}`, form)
          alert('success')
        } catch (e) {
          alert(e)
        } finally {
          this.clear()
        }
      } else {
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
</style>
