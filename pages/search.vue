<template>
  <div class="bg-wave2 minheight">
    <div class="container">
      <div v-if="!$fetchState.pending">
        <h3 class="font-weight-bold custom-color text-center">Jump to</h3>
        <div class="d-flex justify-content-center">
          <vs-button-group>
            <vs-button
              color="#336699"
              relief
              :disabled="$fetchState.pending"
              @click="scrollToView('products')"
            >
              # Products
            </vs-button>
            <vs-button color="#336699" relief @click="scrollToView('bundles')">
              # Bundles
            </vs-button>
            <vs-button
              color="#336699"
              relief
              @click="scrollToView('categories')"
            >
              # Categories
            </vs-button>
          </vs-button-group>
        </div>
        <div id="products" class="pt-5">
          <div class="bg-light px-2 pt-4 pb-2 rounded">
            <h4
              class="font-weight-bold custom-color"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Products
            </h4>
            <p v-if="results.products.length > 0">
              Here's a list of all products that matches your search input
            </p>
            <p v-else>Oops.. got no matching products</p>
            <div v-if="results.products.length">
              <div data-aos="fade" data-aos-duration="1000">
                <CardMain
                  :items="results.products"
                  :item-type="'products'"
                  :store-state="'products'"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="bundles" class="pt-5">
          <div class="bg-light px-2 pt-4 pb-2 rounded">
            <h4
              class="font-weight-bold custom-color"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Bundles
            </h4>
            <p v-if="results.bundles.length > 0">
              Here's a list of bundles that matches your search input
            </p>
            <p v-else>Oops.. got no matching bundles</p>
            <div v-if="results.bundles.length">
              <div data-aos="fade" data-aos-duration="1000">
                <CardMain
                  :items="results.bundles"
                  :item-type="'bundles'"
                  :store-state="'bundles'"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="categories" class="py-5">
          <div class="bg-light px-2 pt-4 pb-2 rounded">
            <h4
              class="font-weight-bold custom-color"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Categories
            </h4>
            <p v-if="results.categories.length > 0">
              Here's a list of all categories that matches your search input
            </p>
            <p v-else>Oops.. got no matching categories</p>
            <div v-if="results.categories.length">
              <div data-aos="fade" data-aos-duration="1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    this.search()
  },
  data() {
    return {
      results: {
        bundles: [],
        products: [],
        transactions: [],
        categories: [],
      },
      activePills: 1,
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  beforeMount() {
    // this.search()
    this.$fetch()
  },
  methods: {
    async search() {
      this.results = await this.$axios.$post('/user-search', {
        search: this.$route.query.search,
      })
    },
    scrollToView(id) {
      document.getElementById(id).scrollIntoView()
    },
  },
}
</script>

<style scoped>
.bg-wave2 {
  background-image: url('/image/wave-bg2.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100vw;
}

.bg-glass {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(5px);
}
</style>
