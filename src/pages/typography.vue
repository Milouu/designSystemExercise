<template>
  <div class="typography richtext">
    <h1 class="heading-h1">
      Typography
    </h1>
    <p>We use <em>Inter</em> font family.</p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  }
};
</script>
