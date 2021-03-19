<template>
<v-app-bar app>
  <v-container>
    <v-row class="justify-space-between">
      <v-col>
        <a :href="$site.base">
          <img class="logo" :src="$site.base + '/logo.png'" />
        </a>
      </v-col>

      <v-col class="d-flex align-content-center justify-end flex-wrap">
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#codebits')">
          codebits
        </v-btn>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#socialLinks')">
          social links
        </v-btn>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#projects')">
          projects
        </v-btn>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#contact')">
          contact
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</v-app-bar>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    gotoSection(pathHash) {
      if (this.$router.currentRoute.hash === pathHash) return;
      this.$router.push({ path: pathHash });
    }
  }
}
</script>

<style lang="styl">

</style>