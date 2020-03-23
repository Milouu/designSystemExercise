<template>
  <div class="categoryBlock pt-1 pb-3 border-b border-grey">
    <div class="label text-grey-600 mb-3">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
