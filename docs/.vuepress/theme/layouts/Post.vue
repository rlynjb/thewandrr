<template>
<v-app class="theme-container">
  <header-theme />

  <v-main>
    <v-container class="pt-16 pb-16">
      <breadcrumb
        :page="$page"
        :disable="[1, 2]"
      />

      <h1>{{ $page.title }}</h1>
      <h5>{{ $page.frontmatter.date ? $page.frontmatter.date : '' }}</h5>

      <div v-if="$page.frontmatter.imgs" class="d-flex">
        <div class="ma-3"
          v-for="(val, ind) in $page.frontmatter.imgs">
          <img :src="Object.keys(val)[0]"
            @click="openDialog(ind)"
          />
          <p>{{ val[Object.keys(val)[0]] }}</p>
        </div>
      </div>

      <Content class="mt-10" />
    </v-container>
  </v-main>

  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(img, ind) in $page.frontmatter.imgs"
      >
        {{ ind + 1 }}
        <h3>{{ img[Object.keys(img)[0]] }}</h3>
        <img :src="Object.keys(img)[0]" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>

  <footer-theme />
</v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';
import breadcrumb from '../components/Breadcrumb';

export default {
  components: {
    headerTheme,
    footerTheme,
    breadcrumb,
  },

  data() {
    return {
      dialog: false,
      model: 0,
    }
  },

  methods: {
    openDialog(index) {
      this.dialog = true;
      this.model = index;
    }
  }
}
</script>

<style lang="styl">

</style>