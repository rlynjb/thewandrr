<template>
<div>
  <v-app-bar>
    <v-container fluid>
      <v-row class="justify-space-between">
        <v-col>
          <v-toolbar-title>
            <a href="/">
              <img class="logo" src="/logo.png" />
            </a>
          </v-toolbar-title>
        </v-col>

        <v-col class="d-flex align-content-center justify-end">
          <v-app-bar-nav-icon
            @click="drawer = true">
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >

    <v-list>
      <v-list-item>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#codebits')">
          codebits
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#socialLinks')">
          social links
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#projects')">
          projects
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text class="ml-3" color="primary"
          @click="gotoSection('#contact')">
          contact
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
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