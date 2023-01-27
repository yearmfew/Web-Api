<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "UserDetailView",
  computed: {
    ...mapState("UserDetail", ["user"]),
  },

  methods: {
    ...mapActions("UserDetail", ["fetchUserData"]),

    async updateUser() {
      this.fetchUserData("63b442bc27ad5ed1f2cb467e");
    },
  },

  async mounted() {
    await this.updateUser();
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ $t("userDetail.title") }}</h1>
    <ul>
      <li>{{ $t("userDetail.firstname") }}: {{ user.firstname }}</li>
      <li>{{ $t("userDetail.lastname") }}: {{ user.lastname }}</li>
      <li>{{ $t("userDetail.title") }}: {{ user.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
