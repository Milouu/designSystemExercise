<template>
  <nav class="sidebar bg-grey-200 md:w-col-2 py-6 px-4">
    <h1 class="mb-8 font-bold">
      {{ name }}
    </h1>
    <ul class="-my-1">
      <li v-for="(item, index) in nav" :key="item.path">
        <smart-link :href="item.path" class="block py-1">
          <div>
            {{ index + 1 }}. <span>{{ item.name }}</span>
          </div>
        </smart-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: process.env.APP_NAME,
      nav: [
        { name: "Home", path: "/" },
        { name: "Token", path: "/token" },
        { name: "Components", path: "/components" },
        { name: "Screen", path: "/screen" }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.sidebar
  .smartLink.nuxt-link-exact-active span
    @apply underline
</style>
