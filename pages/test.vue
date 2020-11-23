<template>
  <div>
    <vs-navbar
      v-model="active"
      shadow
      fixed
      target-scroll="#hide-scroll-content"
      center-collapsed
    >
      <template #left>
        <img src="/image/OnlineGiftingTextEdited.svg" alt="" width="100px" />
      </template>

      <vs-navbar-item id="guide" :active="active == 'guide'">
        Guide
      </vs-navbar-item>
      <vs-navbar-item id="docs" :active="active == 'docs'">
        Documents
      </vs-navbar-item>
      <vs-navbar-item id="components" :active="active == 'components'">
        Components
      </vs-navbar-item>
      <vs-navbar-item id="license" :active="active == 'license'">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar v-model="active" background="primary" text-white absolute>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music"></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt"></i>
            </template>
            Coding
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item id="github">
          <template #icon>
            <i class="bx bxl-github"></i>
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class="bx bxl-codepen"></i>
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord"></i>
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <template #icon>
            <i class="bx bxl-javascript"></i>
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class="bx bxl-git"></i>
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
    </vs-sidebar>
    <div class="row mt-5">
      <div
        v-for="product in LOWPRICE"
        :key="product.id"
        class="col-sm-3 col-md-4 col-lg-3"
      >
        <vs-card>
          <template #title>
            <h3>{{ product.name }}</h3>
          </template>
          <template #img>
            <img :src="product.images[0].url" alt="" />
          </template>
          <template #text>
            <p>blablabla</p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span"> 54 </span>
            </vs-button>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  async fetch() {
    await this.GET_LOWPRICE()
  },
  data() {
    return {
      activeItem: null,
      active: 'guide',
      activeSidebar: false,
    }
  },
  computed: {
    ...mapGetters({
      LOWPRICE: 'products/LOWPRICE',
    }),

    products() {
      return this.LOWPRICE.filter((i) => i.stock > 0)
    },
  },
  methods: {
    ...mapActions({
      GET_LOWPRICE: 'products/GET_LOWPRICE',
    }),
  },
}
</script>
