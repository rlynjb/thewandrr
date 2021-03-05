<template>
  <v-app class="theme-container">
    <header-theme />

    <v-main>
      <Content />
    </v-main>

    <footer-theme />
  </v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';

export default {
  components: {
    headerTheme,
    footerTheme
  },
  data() {
    return {

    }
  },
  created() {
    // checking for vuetify
    console.log(this.$options)
  },
}
</script>

<style lang="styl">
.theme-container a
  text-decoration: none;

.theme-container .header-anchor
  display: none;

.theme-container img
  width: 100%;

.theme-container .logo
  max-width: 200px;
</style>