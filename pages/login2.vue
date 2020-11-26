<template>
  <div class="grid bg-white w-50 text-center rounded">
    <vs-row justify="center">
      <vs-col w="2">
        <img
          src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
          width="150px"
        />
      </vs-col>
    </vs-row>
    <vs-row justify="center">
      <vs-col w="2 mt-5">
        <vs-input v-model="value4" label-placeholder="Email">
          <template #icon>
            <i class="bx bx-lock-open-alt"></i>
          </template>
          <template v-if="validEmail" #message-success> Email Valid </template>
          <template v-if="!validEmail && value4 !== ''" #message-danger>
            Email Invalid
          </template>
        </vs-input>
      </vs-col>
    </vs-row>

    <vs-row justify="space-around">
      <vs-col v-for="(col, index) in 3" :key="index" w="2">
        Space-around {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="space-between">
      <vs-col v-for="(col, index) in 3" :key="index" w="2">
        Space-between {{ index + 1 }}
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: 'login-register',
  data: () => ({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  }),
  computed: {
    validEmail() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4)
    },
  },
}
</script>

<style></style>
