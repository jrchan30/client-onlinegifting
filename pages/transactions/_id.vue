<template>
  <div class="bg-wave h-100 minheight">
    <div v-if="!$fetchState.pending">
      <div class="container">
        <div
          class="jumbotron bg-glass"
          data-aos="fade"
          data-aos-duration="1500"
        >
          <h1 class="display-4">Transaction</h1>
          <p class="lead">
            {{ transaction.data.transaction_number }} (Created
            {{ transaction.data.created_at }})
          </p>
          <nuxt-link to="/transactions">
            See all transactions <i class="fas fa-greater-than"></i>
          </nuxt-link>
          <hr class="my-4" />
          <p>
            Click button below to see more details about the transaction (or pay
            if you haven't)
          </p>
          <div class="d-flex">
            <vs-button
              color="#336699"
              gradient
              class="mr-2"
              @click="isShow = true"
            >
              <i class="bx bx-detail mr-2"></i> See Details
            </vs-button>
            <vs-button
              v-if="
                transaction.data.transaction_status !== 'success' &&
                transaction.data.transaction_status !== 'settlement' &&
                transaction.data.transaction_status !== 'challenge'
              "
              warn
              gradient
              @click="midtransSnap(transaction.data.token, transaction.data.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Pay Now
            </vs-button>
          </div>
        </div>
      </div>
      <div>Disini tampilin bundle / box beserta dengan detilnya</div>
      <div class=""></div>
      <vs-dialog
        v-model="isShow"
        scroll
        overflow-hidden
        not-close
        auto-width
        blur
      >
        <template #header>
          <h3>Transaction Details</h3>
        </template>
        <div>
          <h4>Whats is Vuesax?</h4>
          <p>
            Vuesax (pronounced / vjusacksː /, as view sacks) is a framework of
            UI components created with Vuejs to make projects easily and with a
            unique and pleasant style, vuesax is created from scratch and
            designed for all types of developers from the frontend lover to the
            backend who wants to easily create their visual approach to the
            end-user We are focused on streamlining the work of the programmer
            by giving components created in their entirety and with independent
            customization and very easy to implement, so creativity is in our
            hands but we do not neglect that each project is different both
            visually and in its ecosystem Vuesax does not have a design line
            such as other component frameworks based on Material Design, we
            believe that there are already emaciated frameworks that look
            visually and in UI / UX and we don't want to be one more of the
            bunch, apart from that we love to create and design new experiences
            and surprise you with new elements or details that we can only do by
            being visually free.
          </p>

          <h4>Why Vuesax?</h4>

          <p>
            Vuesax is a relatively new framework with a refreshing design and in
            the latest trends, vuesax based on vuejs which means that we go hand
            in hand with one of the most popular javascript frameworks in the
            world and with a huge community with which you will have all the
            help and documentation to create and make your project
            <br />
            <br />
            - Vuesax, unlike many frameworks, is designed from scratch and we
            are not anchored to any design line, this is something great since
            your project is going to be unique and very different from the
            others

            <br />
            <br />
            - We are focused on the quick and easy creation of projects giving a
            beautiful visual line but without forgetting the personalization and
            independence of the developer

            <br />
            <br />
            - Vuesax uses native css variables for better customization and
            production changes such as changing to dark theme or changing the
            main color of the entire application with few javascript lines
            <br />
            <br />

            - Vuesax is a frame designed to have a great visual impact and that
            is always in trend with respect to design.
            <br />
            <br />

            - An open-source community to create, improve and correct any
            component or function.
            <br />
            <br />

            - Independent components to avoid importing unnecessary code.
            <br />
            <br />

            - Markdown documents for better sustainability.
            <br />
            <br />

            - and much more.
          </p>
        </div>
      </vs-dialog>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'auth',
  async fetch() {
    const res = await this.$axios.$get(`/transactions/${this.$route.params.id}`)
    this.transaction = res
  },
  data() {
    return {
      transaction: null,
      isShow: false,
    }
  },
  methods: {
    async midtransSnap(snapToken, id) {
      try {
        window.snap.pay(snapToken)
        await this.$axios.$get(`/transactions/${id}`)
      } catch (e) {
        alert(e)
      }
    },
  },
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          src: 'https://app.sandbox.midtrans.com/snap/snap.js',
          'data-client-key': process.env.MIDTRANS_CLIENT_KEY || null,
        },
      ],
    }
  },
}
</script>

<style scoped>
.bg-wave {
  background-image: url('/image/wave-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100vw;
}

.custom-title {
  font-size: 1.5rem;
}

.bg-custom {
  background-color: #336699;
}

.bg-glass {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(5px);
}
</style>
