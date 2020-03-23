<template>
  <div class="components richtext">
    <h1 class="heading-h1">
      Components
    </h1>

    <section>
      <h2 class="heading-h2">
        InputText
      </h2>
      <input-text input-id="sample-1" label="First name" placeholder="Lucas" />
    </section>

    <section>
      <h2 class="heading-h2">
        Button
      </h2>
      <app-button>
        Button
      </app-button>
      <div class="spacer mb-4" />
      <app-button outline>
        Button
      </app-button>
    </section>
  </div>
</template>

<script>
import InputText from "~/components/controls/InputText.vue";
import AppButton from "~/components/controls/Button.vue";

export default {
  components: {
    InputText,
    AppButton
  },
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
