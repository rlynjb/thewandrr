<template>
  <v-app class="theme-container">
    <v-app-bar app class="d-flex">
      <v-container>
        <div class="logo">
          <img src="/logo.png" />
        </div>

        tutorials
        vlog
        resume
        linkedin
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <div class="hero pa-5">
          hero here
        </div>

        <div class="desc pa-5">
          desc here
        </div>

        <div class="skills pa-5">
          skills here
        </div>

        <div class="coding pa-5">
          coding here
        </div>

        <div class="exploring pa-5">
          exploring here
        </div>

        <div class="contact pa-5">
          contact here
        </div>

        <Content />
      </v-container>
    </v-main>
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

.theme-container img
  width: 100%;

.theme-container .logo
  max-width: 200px;
</style>