<template>
  <div class="token richtext">
    <h1 class="heading-h1">
      Token
    </h1>

    <section>
      <h2 class="heading-h2">
        Spacing
      </h2>
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
    </section>

    <section>
      <h2 class="heading-h2">
        Typography
      </h2>
      <p>We use <em>Inter</em> font family:</p>
      <div
        v-for="typography in typographies"
        :key="typography.name"
        class="flex items-center my-4"
      >
        <div class="w-col">
          {{ typography.name }}
        </div>
        <div class="flex-1" :class="typography.class">
          {{ typography.sampleText }}
        </div>
      </div>
    </section>

    <section>
      <h2 class="heading-h2">
        Colors
      </h2>
      <p>Here are our colors:</p>
      <div class="flex -mx-4 text-center font-mono">
        <div v-for="color in colors" :key="color.name" class="mx-4">
          <div>{{ color.name }}</div>
          <div class="h-20 w-20 mx-auto" :class="color.class" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: 4,
      scale: [1, 2, 4, 6, 8, 10, 16, 20],
      typographies: [
        { name: "Heading1", sampleText: "Title", class: "heading-h1" },
        { name: "Heading2", sampleText: "Settings", class: "heading-h2" },
        { name: "Heading3", sampleText: "Personal info", class: "heading-h3" },
        {
          name: "Body1",
          sampleText:
            "Ex ipsum cillum nulla ut aliquip consequat labore reprehenderit.",
          class: "paragraph"
        },
        {
          name: "Body2",
          sampleText:
            "Amet enim tempor ad fugiat sunt elit qui quis sit labore velit.",
          class: "paragraph-alt"
        },
        { name: "Overline", sampleText: "Email", class: "label" },
        { name: "Button", sampleText: "Model", class: "button" }
      ],
      colors: [
        { name: "Accent", class: "bg-blue" },
        { name: "White", class: "bg-white" },
        { name: "Grey 1", class: "bg-grey-200" },
        { name: "Grey 2", class: "bg-grey" },
        { name: "Grey 3", class: "bg-grey-600" },
        { name: "Black", class: "bg-black" }
      ]
    };
  },
  head() {
    return this.$buildHead({
      title: "Token",
      description: "This is the token page",
      metaImage: {},
      path: this.$route.path
    });
  }
};
</script>
