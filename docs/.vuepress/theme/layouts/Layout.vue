<template>
  <v-app class="theme-container">
    <v-app-bar app>
      <v-container>
        <v-row class="justify-space-between">
          <v-col>
            <img class="logo" src="/logo.png" />
          </v-col>

          <v-col class="d-flex align-content-center justify-end flex-wrap">
            <v-btn text class="ml-3" color="primary">
              tidbits
            </v-btn>
            <v-btn text class="ml-3" color="primary">
              links
            </v-btn>
            <v-btn text class="ml-3" color="primary">
              contact
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="pa-12">
        <v-row>
          <v-col class="col-8">
            <h3>latest tidbit</h3>
            get latest post here
          </v-col>
          <v-col class="col-4">
            <h2>Hello, I'm Reina</h2>
            <p>
              I'm a Software Engineer with a focus on Front-End Development.
              I created this site to share knowledge and continue progress in my career.
            </p>

            <v-chip>#JS</v-chip>
            <v-chip>#CSS</v-chip>
            <v-chip>#HTML5</v-chip>
            <v-chip>#Vue</v-chip>
          </v-col>
        </v-row>
      </v-container>

      <v-row class="deep-purple darken-4 pa-12">
        <v-container>
          <v-col class="col-12">
            <h3>more tidbits</h3>
          </v-col>

          <v-col class="col-12">
            <h3>js</h3>
          </v-col>

          <v-col class="col-12">
            <h3>algo & ds</h3>
          </v-col>

          <v-col class="col-12">
            <h3>css</h3>
          </v-col class="col-12">

          <v-col class="col-12">
            <h3>html</h3>
          </v-col>
        </v-container>
      </v-row>

      <v-container class="pt-16 pb-16 justify-center">
        <v-row class="text-center">
          <v-col>
            <v-icon large class="mr-2"
              @click="gotoExternal('https://instagram.com/codepurpl')">
              fab fa-instagram
            </v-icon>
            <v-icon large
              @click="gotoExternal('https://facebook.com/ecompurpl')">
              fab fa-facebook-f
            </v-icon>
            <h4 class="mt-4">Where I post my tidbits</h4>
          </v-col>

          <v-col>
            <v-icon large
              @click="gotoExternal('https://leetcode.com/rlynjb/')">
              fas fa-code
            </v-icon>
            <h4 class="mt-4">Where I practice coding</h4>
          </v-col>

          <v-col>
            <v-icon large
              @click="gotoExternal('https://rlynjb.medium.com/')">
              fab fa-medium-m
            </v-icon>
            <h4 class="mt-4">Where I elaborate on details</h4>
          </v-col>

          <v-col>
            <v-icon large class="mr-2"
              @click="gotoExternal('https://github.com/rlynjb')">
              fab fa-github
            </v-icon>
            <v-icon large
              @click="gotoExternal('https://codepen.io/rlynjb')">
              fab fa-codepen
            </v-icon>
            <h4 class="mt-4">Where I store my code</h4>
          </v-col>

          <v-col>
            <v-icon large
              @click="gotoExternal('https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw')">
              fab fa-youtube
            </v-icon>
            <h4 class="mt-4">Where I vlog</h4>
          </v-col>
        </v-row>
      </v-container>

      <v-row>
        <v-col class="pa-16 text-center deep-purple lighten-1">
          website builder
          <h3>coming soon</h3>
        </v-col>

        <v-col class="pa-16 text-center deep-purple darken-1">
          vuepress vuetify theme
          <h3>coming soon</h3>
        </v-col>
      </v-row>

      <!--
      <Content />
      -->
    </v-main>

    <v-footer>
      <v-container>
        <v-row>
          <v-col class="col-6">
            <img class="logo" src="/logo.png" />

            <div>
              <v-icon medium
                class="mr-3"
                @click="gotoExternal('https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw')">
                fab fa-linkedin-in
              </v-icon>
              <v-icon medium
                @click="gotoExternal('https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw')">
                far fa-file
              </v-icon>
            </div>
          </v-col>

          <v-col class="col-6">
            <v-btn text class="ml-3" color="primary">
              tidbits
            </v-btn>
            <v-btn text class="ml-3" color="primary">
              links
            </v-btn>
            <v-btn text class="ml-3" color="primary">
              contact
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="pt-12">
          <v-col class="col-12">
            <i class="far fa-copyright"></i> Copyright 2021 - Wandrr
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
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
  },

  methods: {
    gotoExternal(val) {
      window.open(val);
    }
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