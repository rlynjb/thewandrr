<template>
  <v-app class="theme-container">
    <header-theme />

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

      <v-row class="deep-purple darken-4 pa-12 codebitsWrapper">
        <v-container>
          <v-col class="col-12">
            <h3>more tidbits</h3>
          </v-col>

          <v-col class="col-12">
            <h3>javascript</h3>
            <div class="d-flex">
              <div class="mr-6"
                v-for="val in getPostsByCategory('javascript')">
                <img :src="val.frontmatter.img" />
                <h4>{{ val.frontmatter.title }}</h4>
              </div>
            </div>
          </v-col>

          <v-col class="col-12">
            <h3>algorithm and data strucutre</h3>
            <div class="d-flex">
              <div class="mr-6"
                v-for="val in getPostsByCategory('algorithm-and-data-structure')">
                <img :src="val.frontmatter.img" />
                <h4>{{ val.frontmatter.title }}</h4>
              </div>
            </div>
          </v-col>
        </v-container>
      </v-row>

      <v-container class="pt-16 pb-16 justify-center">
        <v-row class="text-center">
          <v-col>
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
            <h4 class="mt-4">Where I post my tidbits</h4>
          </v-col>

          <v-col>
            <btn-icon
              hrefLink="https://leetcode.com/rlynjb/"
              target="_blank"
              iconName="fas fa-code"
              size="36"
            />
            <h4 class="mt-4">Where I practice coding</h4>
          </v-col>

          <v-col>
            <btn-icon
              hrefLink="https://rlynjb.medium.com/"
              target="_blank"
              iconName="fab fa-medium-m"
              size="36"
            />
            <h4 class="mt-4">Where I elaborate on details</h4>
          </v-col>

          <v-col>
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

          <v-col>
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
    </v-main>

    <footer-theme />
  </v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';
import btnIcon from '../components/BtnIcon';

export default {
  components: {
    headerTheme,
    footerTheme,
    btnIcon,
  },
  data() {
    return {

    }
  },
  created() {
    // checking for vuetify
    console.log('FROM HOME', this.$site.pages)

    /*
      {
        category: 'javascript',
        posts: [
          {
            img: '',
            title: '',
            path: '',
          }
        ]
      }
    */

   this.getPostsByCategory();
  },

  methods: {
    getCodebitsCategories() {
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

    getPostsByCategory(category) {
      return this.$site.pages
        .filter(v => v.regularPath.includes(category));
    },
  }
}
</script>

<style lang="styl">
.codebitsWrapper img
  max-width: 250px;
</style>