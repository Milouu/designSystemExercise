<template>
  <div class="components richtext">
    <h1 class="heading-h1">
      Components
    </h1>

    <section>
      <h2 class="heading-h2">
        InputText
      </h2>
      <input-text
        class="max-w-col-3"
        input-id="sample-1"
        label="First name"
        placeholder="Lucas"
      />
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

    <section>
      <h2 class="heading-h2">
        Help
      </h2>
      <help class="max-w-col-6">
        <rocket-svg class="h-5 w-5 inline" /> Cliquez glissez pour déposer un
        fichier
      </help>
    </section>

    <section>
      <h2 class="heading-h2">
        ProfilePicture
      </h2>
      <profile-picture
        src="/assets/img/pp.jpg"
        username="Victor"
        class="h-24 w-24"
      />
    </section>

    <section>
      <h2 class="heading-h2">
        CategoryItem
      </h2>
      <category-item class="max-w-col-6">
        <template v-slot:icon>
          <profile-picture
            class="w-full h-full"
            src="/assets/img/pp.jpg"
            username="Victor"
          />
        </template>
        My account
      </category-item>
      <div class="spacer mb-4" />
      <category-item class="max-w-col-6" active>
        <template v-slot:icon>
          <profile-picture
            class="w-full h-full"
            src="/assets/img/pp.jpg"
            username="Victor"
          />
        </template>
        My account
      </category-item>
    </section>

    <section>
      <h2 class="heading-h2">
        CategoryBlock
      </h2>
      <category-block title="Me" class="max-w-col-6">
        <category-item active>
          <template v-slot:icon>
            <profile-picture
              class="w-full h-full"
              src="/assets/img/pp.jpg"
              username="Victor"
            />
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
    </section>

    <section>
      <h2 class="heading-h2">
        CategoryPanel
      </h2>
      <category-panel class="h-screen shadow" :style="{ width: '260px' }">
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
    </section>
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
