<template>
  <div
    class="categoryItem p-2 my-1 paragraph-alt flex items-center rounded -mx-2 hover:bg-grey-200 cursor-pointer"
    :class="{ 'bg-grey-200': active }"
  >
    <div class="w-6 h-6 mr-2 flex items-center justify-center">
      <slot name="icon" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
