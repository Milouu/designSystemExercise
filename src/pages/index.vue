<template>
  <div class="home richtext">
    <h1 class="heading-h1">
      Home
    </h1>
    <p>
      You'll find in the following pages information about our design system.
    </p>
    <p>
      Our code is available on:
      <smart-link
        href="https://github.com/Milouu/designSystemExercise"
        blank
        class="underline"
      >
        GitHub
      </smart-link>
    </p>
    <p>Made with love by team 01:</p>
    <ul class="list-disc pl-5">
      <li>Paul Goutry</li>
      <li>Edouard Haberer</li>
      <li>Victor Timsit</li>
      <li>Lucas Resch</li>
      <li>Milan Roustan</li>
    </ul>
  </div>
</template>

<script>
// import Component from "~/components/Component.vue"

export default {
  components: {
    // Component
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  },
  head() {
    return this.$buildHead({
      title: "Home",
      description: "This is the home page",
      metaImage: {},
      path: this.$route.path
    });
  }
};
</script>

<style lang="sass" scoped></style>
