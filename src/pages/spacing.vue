<template>
  <div class="spacing richtext">
    <h1 class="heading-h1">
      Spacing
    </h1>
    <p>System use a 4px based spacing scale:</p>
    <div class="flex -mx-4 text-center font-mono">
      <div v-for="size in scale" :key="size" class="mx-4">
        <div>{{ size * base }}px</div>
        <div
          class="bg-blue mx-auto"
          :style="{
            width: `${size * base}px`,
            height: `${size * base}px`
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: 4,
      scale: [1, 2, 4, 6, 8, 10, 16, 20]
    };
  },
  head() {
    return this.$buildHead({
      title: "Spacing",
      description: "This is the spacing page",
      metaImage: {},
      path: this.$route.path
    });
  }
};
</script>
