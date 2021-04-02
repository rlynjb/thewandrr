<template>
<v-app class="theme-container">
  <header-theme />

  <v-main>
    <v-container class="pt-16 pb-16">
      <breadcrumb
        :page="$page"
        :disable="[1, 2]"
      />

      <h1 class="font-weight-light mt-8"
        style="line-height: 1.2;">
        {{ $page.title }}
      </h1>
      <h5>{{ $page.frontmatter.date ? $page.frontmatter.date : '' }}</h5>

      <v-row v-if="$page.frontmatter.imgs"
        class="mt-6">
        <v-col
          class="post-thumb"
          cols="6"
          sm="6"
          md="3"
          lg="2"
          v-if="$page.frontmatter.img">
          <img :src="'/' + $page.frontmatter.img"
            @click="openDialog(0)"
          />
        </v-col>

        <v-col
          class="post-thumb"
          cols="6"
          sm="6"
          md="3"
          lg="2"
          v-for="(val, ind) in $page.frontmatter.imgs">
          <img :src="'/' + Object.keys(val)[0]"
            @click="openDialog(ind + 1)"
          />
          <p>{{ val[Object.keys(val)[0]] }}</p>
        </v-col>
      </v-row>

      <Content class="mt-10" />
    </v-container>
  </v-main>

  <v-dialog
    v-model="dialog"
    width="500"
  >
    <image-carousel
      :cover="$page.frontmatter.img"
      :imgs="$page.frontmatter.imgs"
      :model="imgIndex"
    />
  </v-dialog>

  <footer-theme />
</v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';
import breadcrumb from '../components/Breadcrumb';
import imageCarousel from '../components/ImageCarousel';

export default {
  components: {
    headerTheme,
    footerTheme,
    breadcrumb,
    imageCarousel,
  },

  data() {
    return {
      dialog: false,
      imgIndex: 0,
    }
  },

  methods: {
    openDialog(index) {
      this.dialog = true;
      this.imgIndex = index;
    }
  }
}
</script>

<style lang="styl">
.post-thumb {
  cursor: pointer;
}
</style>