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
    User Details here..
    <ul>
      <li>firstname: {{ user.firstname }}</li>
      <li>lastname: {{ user.lastname }}</li>
      <li>title: {{ user.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
