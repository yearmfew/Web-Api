<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
export default {
  name: "App",
  components: { LocaleSwitcher },
};
</script>

<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link>  -->
      <router-link to="/user-detail">Student Details</router-link>

      |
      <LocaleSwitcher />
    </nav>
    <hr />

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
