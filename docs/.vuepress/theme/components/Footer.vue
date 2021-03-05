<template>
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
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    gotoExternal(val) {
      window.open(val);
    }
  }
}
</script>

<style lang="styl">

</style>