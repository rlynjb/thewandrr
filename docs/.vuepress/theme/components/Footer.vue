<template>
<v-footer>
  <v-container>
    <v-row>
      <v-col class="col-6">
        <img class="logo" src="/logo.png" />

        <div>
          <btn-icon
            hrefLink="https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw"
            target="_blank"
            iconName="fab fa-linkedin-in"
            size="24"
          />

          <btn-icon
            hrefLink="https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw"
            target="_blank"
            iconName="far fa-file"
            size="24"
          />
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
import btnIcon from '../components/BtnIcon';
export default {
  components: {
    btnIcon
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="styl">

</style>