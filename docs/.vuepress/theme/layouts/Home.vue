<template>
  <v-app class="theme-container">
    <header-theme />

    <v-main>
      <v-container fluid class="pt-16 pb-16">
        <v-row>
          <v-col class="latestPost"
            cols="12"
            sm="12"
            md="8"
            lg="8">
            <posts-by-latest :postAmount="2" @onSelectedPost="onSelectedPost" />
          </v-col>

          <v-col
            cols="12"
            sm="12"
            md="4"
            lg="4">
            <h2>Hello, I'm Reina</h2>
            <p>
              I'm a Software Engineer with a focus on Front-End Development.
              I created this site to share knowledge and continue progress in my career.
            </p>

            <v-chip>#JS</v-chip>
            <v-chip>#CSS</v-chip>
            <v-chip>#HTML5</v-chip>
            <v-chip>#Vue</v-chip>
            <!--
            <v-chip>#DataStructure</v-chip>
            <v-chip>#Algorithms</v-chip>
            <v-chip>#Ecommerce</v-chip>
            <v-chip>#Greensock</v-chip>
            -->
          </v-col>
        </v-row>
      </v-container>

      <v-container
        fluid
        class="deep-purple darken-4 pt-12 pb-12 postsWrapper">
        <v-row id="codebits">
          <v-col cols="12"
            class="pb-12">
            <h2 class="font-weight-medium">javascript</h2>
            <posts-by-category
              category="javascript"
              @onSelectedPost="onSelectedPost"
            />
          </v-col>

          <v-col cols="12">
            <h2 class="font-weight-medium">e-commerce</h2>
            <posts-by-category
              category="ecommerce"
              @onSelectedPost="onSelectedPost"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid id="socialLinks" class="pt-16 pb-16 justify-center">
        <v-row class="text-center">
          <v-col class="social-thumb">
            <btn-icon
              hrefLink="https://instagram.com/codepurpl"
              target="_blank"
              iconName="fab fa-instagram"
              size="36"
            />

            <btn-icon
              hrefLink="https://facebook.com/ecompurpl"
              target="_blank"
              iconName="fab fa-facebook-f"
              size="36"
            />
            <h4 class="mt-4">Where I post my codebits</h4>
          </v-col>

          <v-col class="social-thumb">
            <btn-icon
              hrefLink="https://leetcode.com/rlynjb/"
              target="_blank"
              iconName="fas fa-code"
              size="36"
            />
            <h4 class="mt-4">Where I practice coding</h4>
          </v-col>

          <v-col class="social-thumb">
            <btn-icon
              hrefLink="https://rlynjb.medium.com/"
              target="_blank"
              iconName="fab fa-medium-m"
              size="36"
            />
            <h4 class="mt-4">Where I elaborate on details</h4>
          </v-col>

          <v-col class="social-thumb">
            <btn-icon
              hrefLink="https://github.com/rlynjb"
              target="_blank"
              iconName="fab fa-github"
              size="36"
            />

            <btn-icon
              hrefLink="https://codepen.io/rlynjb"
              target="_blank"
              iconName="fab fa-codepen"
              size="36"
            />
            <h4 class="mt-4">Where I store my code</h4>
          </v-col>

          <v-col class="social-thumb">
            <btn-icon
              hrefLink="https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw"
              target="_blank"
              iconName="fab fa-youtube"
              size="36"
            />
            <h4 class="mt-4">Where I vlog</h4>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid>
      <v-row id="projects">
        <project-tile
          color="deep-purple lighten-1"
          :comingsoon="true"
          img="purpl_template_builder.png"
        />

        <project-tile
          color="deep-purple darken-1"
          :comingsoon="true"
          img="themepj.png"
        />

        <project-tile
          color="deep-purple lighten-1"
          :comingsoon="true"
          img="ecompurpl_affiliate_store.png"
        />
      </v-row>
      </v-container>
      </v-row>
    </v-main>

    <footer-theme id="contact" />

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <div v-if="selectedPost">
        <image-carousel
          :imgs="selectedPost.frontmatter.imgs"
          :cover="selectedPost.frontmatter.img"
          :model="imgIndex"
          ref="imageCarousel"
        />
      </div>
    </v-dialog>
  </v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';
import btnIcon from '../components/BtnIcon';
import postsByCategory from '../components/PostsByCategory';
import postsByLatest from '../components/PostsByLatest';
import imageCarousel from '../components/ImageCarousel';
import projectTile from '../components/ProjectTile';

export default {
  components: {
    headerTheme,
    footerTheme,
    btnIcon,
    postsByCategory,
    postsByLatest,
    imageCarousel,
    projectTile,
  },

  data() {
    return {
      dialog: false,
      imgIndex: 0,
      selectedPost: null,
    }
  },

  methods: {
    onSelectedPost(val) {
      this.dialog = true;
      this.selectedPost = val;
      this.$nextTick(() => {
        this.$refs.imageCarousel.resetCarousel()
      })
    },

    /*
      @param string
      @return [string]
    */
    getCategoriesByParent(parentCategory) {
      let categories = this.$site.pages
        .map(v => {
          let cat = /codebits\/(.*)\//g.exec(v.regularPath);
          if (cat) {
            return cat[1];
          }
        })
        .filter(v => v);

      return [...new Set(categories)];
    },
  }
}
</script>

<style lang="styl">
.postsWrapper img
  max-width: 250px;

.latestPost img
  max-width: 180px;

.post-thumb
  cursor: pointer;

.social-thumb
  min-width: 200px;
</style>