<template>
  <div v-if="!$fetchState.pending">
    <div
      class="bg-container bg-none bg-md-block"
      :class="{
        'bg-cart-empty':
          CART.data[0].boxes.length < 1 && CART.data[0].bundles.length < 1,
      }"
    >
      <div
        v-if="CART.data[0].boxes.length < 1 && CART.data[0].bundles.length < 1"
      >
        <div class="row">
          <div
            class="mt-md-5 col-7 offset-1 col-md-6 col-lg-5 col-xl-4 offset-md-1 offset-lg-2 offset-xl-3"
          >
            <vs-alert
              color="rgba(51, 102, 153, 0.2)"
              class="px-0 px-xl-4"
              shadow
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <template #title> Empty Cart </template>
              <p class="d-none d-md-block">
                You have an empty cart, you can add your
                <b to="/boxes">custom boxes</b> or
                <b to="/bundles">premade bundles</b> to your cart.
              </p>
              <p>Let's get started by clicking one of the button below</p>
              <div class="d-flex">
                <vs-button warn gradient to="/boxes"> Custom Boxes </vs-button>
                <vs-button danger gradient to="/bundles">
                  Premade Bundles
                </vs-button>
              </div>
            </vs-alert>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="container">
          <vs-table v-model="selected">
            <template #thead>
              <vs-tr>
                <vs-th>
                  <vs-checkbox
                    v-model="allCheck"
                    :indeterminate="selected.length == users.length"
                    @change="selected = $vs.checkAll(selected, users)"
                  />
                </vs-th>
                <vs-th> Name </vs-th>
                <vs-th> Email </vs-th>
                <vs-th> Id </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr
                v-for="(tr, i) in users"
                :key="i"
                :data="tr"
                :is-selected="!!selected.includes(tr)"
              >
                <vs-td checkbox>
                  <vs-checkbox v-model="selected" :val="tr" />
                </vs-td>
                <vs-td>
                  {{ tr.name }}
                </vs-td>
                <vs-td>
                  {{ tr.email }}
                </vs-td>
                <vs-td>
                  {{ tr.id }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
          <span class="data">
            <pre>
  {{ selected.length > 0 ? selected : 'Select an item in the table' }}
        </pre
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'default',
  middleware: 'auth',
  async fetch() {
    await this.GET_CART()
  },
  data() {
    return {
      allCheck: false,
      selected: [],
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          website: 'hildegard.org',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          website: 'anastasia.net',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          website: 'ramiro.info',
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          website: 'kale.biz',
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          website: 'demarco.info',
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          website: 'ola.org',
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          website: 'elvis.io',
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          website: 'jacynthe.com',
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          website: 'conrad.com',
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          website: 'ambrose.net',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      CART: 'users/CART',
    }),
  },
  methods: {
    ...mapActions({
      GET_CART: 'users/GET_CART',
    }),
  },
}
</script>

<style scoped>
.bg-cart-empty {
  background-image: url('/image/empty_cart.svg');
}

.bg-container {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100vw;
  min-height: calc(100vh - 15rem);
}
</style>
