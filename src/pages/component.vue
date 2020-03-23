<template>
  <div class="component">
    <h1 class="heading-h1">
      Component
    </h1>
  </div>
</template>

<script>
export default {
  head() {
    return this.$buildHead({
      title: "Component",
      description: "This is the component page",
      metaImage: {},
      path: this.$route.path
    });
  }
};
</script>
