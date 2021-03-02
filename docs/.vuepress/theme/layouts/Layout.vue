<template>
  <v-app class="theme-container">
    <Content class="pa-10"/>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    // checking for vuetify
    console.log(this.$options)
  }
}
</script>

<style lang="styl">
.theme-container a
  text-decoration: none;
</style>