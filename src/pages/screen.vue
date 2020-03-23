<template>
  <div
    class="screen bg-grey-600 h-screen -my-6 -mx-10 overflow-y-auto py-8 px-16"
  >
    <div class="rounded bg-white h-full flex">
      <category-panel
        class="h-full border-r border-grey"
        :style="{ width: '260px' }"
      >
        <category-block title="Me" class="mb-6">
          <category-item active>
            <template v-slot:icon>
              <profile-picture src="/assets/img/pp.jpg" username="Victor" />
            </template>
            My account
          </category-item>
          <category-item>
            <template v-slot:icon>
              <members-svg />
            </template>
            Friends
          </category-item>
          <category-item>
            <template v-slot:icon>
              <notification-svg />
            </template>
            Messages
          </category-item>
        </category-block>

        <category-block title="General">
          <category-item>
            <template v-slot:icon>
              <members-svg />
            </template>
            Notifications
          </category-item>
          <category-item>
            <template v-slot:icon>
              <security-svg />
            </template>
            Security
          </category-item>
          <category-item>
            <template v-slot:icon>
              <rocket-svg />
            </template>
            Updates
          </category-item>
          <category-item>
            <template v-slot:icon>
              <cog-svg />
            </template>
            Settings
          </category-item>
        </category-block>

        <template v-slot:after>
          <category-item>
            <template v-slot:icon>
              <logout-svg />
            </template>
            Logout
          </category-item>
        </template>
      </category-panel>

      <main class="flex-1 flex flex-col">
        <div class="py-6 px-10 flex-1 overflow-y-auto">
          <help class="mb-8">
            <rocket-svg class="h-5 w-5 inline" /> Cliquez glissez pour déposer
            un fichier
          </help>

          <section class="mb-8">
            <h2 class="heading-h2 mb-6">
              Photo
            </h2>
            <profile-picture
              src="/assets/img/pp.jpg"
              username="Victor"
              class="h-24 w-24 mb-4"
            />
            <app-button outline>
              Upload photo
            </app-button>
          </section>

          <section class="mb-2">
            <h2 class="heading-h2 mb-6">
              Private infos
            </h2>
            <div class="wrapper" :style="{ width: '280px' }">
              <input-text
                input-id="sample-1"
                label="First name"
                placeholder="Dimitri"
                class="mb-6"
              />
              <input-text
                input-id="sample-1"
                label="Last name"
                placeholder="Crackers"
                class="mb-6"
              />
              <input-text
                input-id="sample-1"
                label="Email address"
                placeholder="dimcrack@gmail.com"
              />
            </div>
          </section>
        </div>
        <section class="w-full py-8 px-10 border-t border-grey flex bg-white">
          <app-button class="mr-4">
            Save
          </app-button>
          <app-button outline>
            Cancel
          </app-button>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import InputText from "~/components/controls/InputText.vue";
import AppButton from "~/components/controls/Button.vue";
import Help from "~/components/display/Help.vue";
import ProfilePicture from "~/components/display/ProfilePicture.vue";
import CategoryItem from "~/components/display/category/Item.vue";
import CategoryBlock from "~/components/display/category/Block.vue";
import CategoryPanel from "~/components/display/category/Panel.vue";

import RocketSvg from "~/assets/icons/rocket.svg";
import MembersSvg from "~/assets/icons/members.svg";
import NotificationSvg from "~/assets/icons/notification.svg";
import SecuritySvg from "~/assets/icons/security.svg";
import CogSvg from "~/assets/icons/cog.svg";
import LogoutSvg from "~/assets/icons/logout.svg";

export default {
  components: {
    InputText,
    AppButton,
    Help,
    ProfilePicture,
    CategoryItem,
    CategoryBlock,
    CategoryPanel,

    RocketSvg,
    MembersSvg,
    NotificationSvg,
    SecuritySvg,
    CogSvg,
    LogoutSvg
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  },
  head() {
    return this.$buildHead({
      title: "Screen",
      description: "This is the screen page",
      metaImage: {},
      path: this.$route.path
    });
  }
};
</script>

<style lang="sass" scoped></style>
