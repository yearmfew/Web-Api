<template>
  <p>{{ t("userDetail.firstname") }}</p>
  <LocaleSwitcher />
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import LocaleSwitcher from "./LocaleSwitcher.vue";
export default defineComponent({
  name: "HelloI18n",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
  components: { LocaleSwitcher },
});
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
