<template>
  <v-app class="theme-container">
    <header-theme />

    <v-main>
      <v-container class="pt-16 pb-16">
        <v-row>
          <v-col class="col-8 latestPost">
            <div @click="gotoPost(getLatestPost()[0])">
              <h3>latest codebits</h3>
              <img :src="getLatestPost()[0].frontmatter.img" />
              <h2>{{ getLatestPost()[0].frontmatter.title }}</h2>
              <v-btn
                @click="openDialogPost(getLatestPost()[0])">
                preview
              </v-btn>
            </div>
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

      <v-row class="deep-purple darken-4 pt-12 pb-12 codebitsWrapper">
        <v-container>
          <v-col class="col-12 pb-12">
            <h3>javascript</h3>
            <div class="d-flex">
              <div class="mr-6"
                v-for="val in getPostsByCategory('javascript')"
                @click="gotoPost(val)"
              >
                <img :src="val.frontmatter.img" />
                <h4>{{ val.frontmatter.title }}</h4>
                <h6>{{ getPostDate(val.path) }}</h6>
                <v-btn
                  @click="openDialogPost(val)">
                  preview
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col class="col-12">
            <h3>algorithm and data strucutre</h3>
            <div class="d-flex">
              <div class="mr-6"
                v-for="val in getPostsByCategory('algorithm-and-data-structure')"
                @click="gotoPost(val)"
              >
                <img :src="val.frontmatter.img" />
                <h4>{{ val.frontmatter.title }}</h4>
                <h6>{{ getPostDate(val.path) }}</h6>
                <v-btn
                  @click="openDialogPost(val)">
                  preview
                </v-btn>
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
            <h4 class="mt-4">Where I post my codebits</h4>
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

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <div v-if="selectedPost">
        <h3>{{ selectedPost.frontmatter.title }}</h3>
        <img :src="selectedPost.frontmatter.img" />
      </div>
    </v-dialog>
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
      dialog: false,
      selectedPost: null,
    }
  },
  created() {
    // checking for vuetify
    //console.log('FROM HOME', this.$site.pages)
  },

  methods: {
    gotoPost(val) {
      this.$router.push({
        path: val.path
      });
    },

    openDialogPost(val) {
      this.dialog = true;
      this.selectedPost = val;
    },

    /*
      @param string
      @return [string]
    */
    getCodebitsCategories(parentCategory) {
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

    /*
      @param string
      @return [object]
    */
    getPostsByCategory(category) {
      return this.$site.pages
        .filter(v => v.regularPath.includes(category));
    },

    /*
      @param string
      @return string
    */
    getPostDate(val) {
      let date = /(\d\d\d\d-\d\d-\d\d)/g.exec(val);
      return date && date[0];
    },

    /*
      @return [object]
    */
    getLatestPost() {
      let final = this.$site.pages
        .filter(v => {
          return this.getPostDate(v.path);
        })
        .sort((a, b) => {
          let dateA = Number(new Date(this.getPostDate(b.path)))
          let dateB = Number(new Date(this.getPostDate(a.path)))
          return dateA - dateB
        });

      return final
    },
  }
}
</script>

<style lang="styl">
.codebitsWrapper img
  max-width: 250px;

.latestPost img
  max-width: 180px;
</style>