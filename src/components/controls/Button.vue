<template>
  <button
    class="button py-2 px-4 rounded leading-5 border border-blue focus:outline-none"
    :class="{
      'text-blue': outline,
      'hover:bg-blue': outline,
      'hover:text-white': outline,
      'hover:bg-white': !outline,
      'hover:text-blue': !outline,
      'bg-blue': !outline,
      'text-white': !outline
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false
    }
  }
};
</script>
