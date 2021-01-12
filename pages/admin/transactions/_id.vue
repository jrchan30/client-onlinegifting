<template>
  <div class="row">
    <!-- <template v-if="Object.keys(TRANSACTION).length > 0"> -->

    <div class="col-xl-4 order-xl-2">
      <div class="card card-profile">
        <img
          src="/assets/img/theme/img-1-1000x600.jpg"
          alt="Image placeholder"
          class="card-img-top"
        />
        <div class="row justify-content-center">
          <div class="col-lg-3 order-lg-2">
            <div class="card-profile-image">
              <img
                :src="TRANSACTION.user.profile_pic"
                class="rounded-circle bg-white"
                width="140px"
                height="140px"
              />
            </div>
          </div>
        </div>
        <div
          class="card-header text-center border-0 pt-8 pt-md-5 pb-0 pb-md-5"
        ></div>
        <div class="card-body pt-0">
          <div class="row text-center">
            <div class="col">
              <h5 class="h3">
                {{ TRANSACTION.user.name }}
              </h5>
              <div class="h5 font-weight-300">
                <i class="fas fa-envelope mr-2"></i>{{ TRANSACTION.user.email }}
              </div>
              <div class="h5 mt-4">
                <i class="fas fa-user mr-2"></i
                ><span class="text-capitalize">{{
                  TRANSACTION.user.type
                }}</span>
              </div>
              <div>
                <i class="far fa-clock mr-2"></i>Member since
                {{ TRANSACTION.user.created_at }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <vs-button block @click="showPayload = true"
            >Show Full Payload</vs-button
          >
        </div>
      </div>
      <vs-dialog v-model="showPayload">
        <template #header>
          <h4 class="not-margin">Transaction <b>Payload</b></h4>
        </template>

        <pre>
            {{ JSON.parse(TRANSACTION.payloads) }}
          </pre
        >
      </vs-dialog>
      <div class="card">
        <div class="card-header"><h3>Items</h3></div>
        <div class="card-body">
          <div class="row">
            <div v-if="TRANSACTION.paid_boxes" class="col-12">
              Box Quantity: {{ TRANSACTION.paid_boxes.length }}
            </div>
            <div v-if="TRANSACTION.paid_bundles" class="col-12">
              Bundle Quantity: {{ TRANSACTION.paid_bundles.length }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-8 order-xl-1">
      <div class="card">
        <div class="card-header"><h3>Transaction Info</h3></div>
        <div class="card-body">
          <div class="pl-lg-4">
            <div class="row">
              <div
                v-for="(field, index) in transaction_info"
                :key="index"
                :class="field.class"
              >
                <div class="form-group">
                  <label class="form-control-label">{{ field.label }}</label>
                  <span class="form-control text-capitalize">
                    {{ field.value }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-4" />
          <h6 class="heading-small text-muted mb-4">
            Delivery Information (Receiver)
          </h6>
          <div class="pl-lg-4">
            <div class="row">
              <div
                v-for="(field, index) in delivery_info"
                :key="index"
                :class="field.class"
              >
                <div class="form-group">
                  <label class="form-control-label">{{ field.label }}</label>
                  <span class="form-control">
                    {{ field.value }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12 order-xl-3">
      <div v-if="TRANSACTION.paid_boxes.length > 0" class="card">
        <div class="card-header">
          <h3>Box Details</h3>
        </div>
        <div
          v-for="box in TRANSACTION.paid_boxes"
          :key="box.id"
          class="card-body"
        >
          <h6 class="heading-small text-muted mb-4">{{ box.name }}</h6>
          <div
            class="table-responsive"
            data-toggle="list"
            data-list-values='["id", "name", "price", "stock", "weight"]'
          >
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="sort">Product Name</th>
                  <th scope="col" class="sort">Product Price</th>
                  <th scope="col" class="sort">Product Quantity</th>
                </tr>
              </thead>
              <tbody class="list">
                <tr v-for="product in box.paid_products" :key="product.id">
                  <th class="name">
                    <span class="text-capitalize">{{ product.name }}</span>
                  </th>
                  <td>
                    <span>{{ product.price }}</span>
                  </td>
                  <td>
                    <span>{{ product.quantity }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12 order-xl-3">
      <div v-if="TRANSACTION.paid_bundles.length > 0" class="card">
        <div class="card-header">
          <h3>Bundle Details</h3>
        </div>
        <div
          v-for="bundle in TRANSACTION.paid_bundles"
          :key="bundle.id"
          class="card-body"
        >
          <h6 class="heading-small text-muted mb-4">{{ bundle.name }}</h6>

          <div
            class="table-responsive"
            data-toggle="list"
            data-list-values='["id", "name", "price", "stock", "weight"]'
          >
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="sort">Product Name</th>
                  <th scope="col" class="sort">Product Price</th>
                  <th scope="col" class="sort">Product Quantity</th>
                </tr>
              </thead>
              <tbody class="list">
                <tr v-for="product in bundle.paid_products" :key="product.id">
                  <th class="name">
                    <span class="text-capitalize">{{ product.name }}</span>
                  </th>
                  <td>
                    <span>{{ product.price }}</span>
                  </td>
                  <td>
                    <span>{{ product.quantity }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- </template> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  async fetch({ store, params }) {
    await store.dispatch('transactions/GET_TRANSACTION', params.id)
  },
  fetchOnServer: false,
  data() {
    return {
      showPayload: false,
      transaction_info: {
        invoice: {
          class: 'col-lg-6',
          label: 'INVOICE',
          value: '-',
        },
        payment_type: {
          class: 'col-lg-6',
          label: 'Payment Type',
          value: '-',
        },
        total_price: {
          class: 'col-lg-6',
          label: 'Total Price',
          value: '-',
        },
        time_created: {
          class: 'col-lg-6',
          label: 'Time Created',
          value: '-',
        },
      },
      delivery_info: {
        full_address: {
          class: 'col-md-12',
          label: 'Full Address',
          value: '-',
        },
        destination_code: {
          class: 'col-lg-4',
          label: 'Destination Code',
          value: '-',
        },
        phone_number: {
          class: 'col-lg-4',
          label: 'Phone Number',
          value: '-',
        },
        delivery_fee: {
          class: 'col-lg-4',
          label: 'Delivery Fee',
          value: '-',
        },
        courier_code: {
          class: 'col-lg-4',
          label: 'Courier Code',
          value: '-',
        },
        service_type: {
          class: 'col-lg-4',
          label: 'Service Type',
          value: '-',
        },
        total_weight: {
          class: 'col-lg-4',
          label: 'Total Weight',
          value: '-',
        },
        arrival_date: {
          class: 'col-md-12',
          label: 'Arrival Date',
          value: null,
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION',
    }),
  },
  created() {
    this.fillData()
  },
  methods: {
    fillData() {
      // Transaction Info
      this.transaction_info.invoice.value = this.TRANSACTION.transaction_number
      this.transaction_info.payment_type.value = this.TRANSACTION.payment_type
      this.transaction_info.total_price.value = this.TRANSACTION.total_price
      this.transaction_info.time_created.value = this.TRANSACTION.created_at

      // Delivery Info
      this.delivery_info.full_address.value = this.TRANSACTION.receiver_full_address
      this.delivery_info.destination_code.value = this.TRANSACTION.receiver_destination_code
      this.delivery_info.phone_number.value = this.TRANSACTION.receiver_phone_number
      this.delivery_info.delivery_fee.value = this.TRANSACTION.delivery_fee
      this.delivery_info.courier_code.value = this.TRANSACTION.delivery_courier_code
      this.delivery_info.service_type.value = this.TRANSACTION.delivery_courier_service
      this.delivery_info.total_weight.value = this.TRANSACTION.total_weight
      this.delivery_info.arrival_date.value = this.TRANSACTION.arrival_date
    },
  },
}
</script>

<style></style>
