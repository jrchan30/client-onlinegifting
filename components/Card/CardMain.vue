<template>
  <div class="row">
    <div
      v-for="item in items"
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
            danger
            icon
            :disabled="$auth.user == null"
            @click="like(item.id)"
          >
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button shadow icon :disabled="$auth.user == null">
            <i class="fas fa-cart-plus text-primary"></i>
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    async like(id) {
      let type = ''
      type = this.itemType.includes('product') ? 'product' : 'bundle'
      const likeForm = {
        type,
        id,
      }
      try {
        await this.$axios.$post('/likes', likeForm).then((res) => {
          this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Liked',
            showConfirmButton: false,
            timer: 1000,
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
    goTo(id) {
      this.$router.push(`/${this.itemType}/${id}`)
    },
  },
}
</script>

<style></style>
