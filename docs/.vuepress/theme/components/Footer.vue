<template>
<v-footer>
  <v-container fluid>
    <v-row>
      <v-col class="col-12 text-center pa-12">
        <a href="/">
          <img class="logo" src="/logo.png" />
        </a>

        <h2 class="mt-12">Get Intouch</h2>
        <div class="mt-6">
          <btn-icon
            hrefLink="https://www.linkedin.com/in/rlynpro/"
            target="_blank"
            iconName="fab fa-linkedin-in"
            size="30"
            class="mr-6"
          />

          <btn-icon
            hrefLink="https://docs.google.com/document/d/1VN9dtP5_oyVELBfDxY7qXaFLu4iSs4yOEK8vqjDoFG8/edit?usp=sharing"
            target="_blank"
            iconName="far fa-file"
            size="30"
          />
        </div>
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