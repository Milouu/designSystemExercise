<template>
  <img :src="src" :alt="username" class="profilePicture rounded-full" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    username: {
      type: String,
      default: ""
    }
  }
};
</script>
