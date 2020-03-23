<template>
  <div class="inputText">
    <label :for="inputId" class="label block text-grey-600 pb-1">{{
      label
    }}</label>
    <input
      type="text"
      class="paragraph-alt rounded border border-grey px-2 py-2 leading-none"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
</script>
