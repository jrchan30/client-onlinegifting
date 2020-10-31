<template>
  <div>
    <div class="input-group">
      <div class="input-group-prepend">
        <div
          class="input-group-text text-primary bg-transparent border-right-0"
        >
          <i :class="icon"></i>
        </div>
      </div>
      <input
        :id="id"
        :name="name"
        :type="inputType"
        class="form-control border-left-0"
        :class="{ 'is-invalid': errors.hasOwnProperty(`${name}`) }"
        :placeholder="placeholder"
        :value="keyValue"
        v-on:input="$emit('new-input', $event.target.value)"
        required
      />
    </div>
    <span v-if="errors.hasOwnProperty(name)" class="m-0 text-danger">{{
      errors[name][0]
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'fas fa-question',
    },
    placeholder: {
      type: String,
      default: '...',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    keyValue: {
      type: String,
      default: '',
    },
    errors: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
