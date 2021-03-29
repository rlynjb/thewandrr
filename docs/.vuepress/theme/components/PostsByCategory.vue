<template>
<div class="d-flex" style="overflow-y: auto;">
  <div class="col postItem"
    v-for="val in getPostsByCategory(category)"
  >
    <div class="post-thumb">
      <img :src="'/' + val.frontmatter.img"
        @click="openDialogPost(val)"
      />

      <div @click="gotoPost(val)">
        <h4>{{ val.frontmatter.title }}</h4>
        <h5 class="font-weight-medium grey--text lighten-5">
          {{ formatDate(val.date) }}
        </h5>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    category: {
      required: true,
      type: String,
      default: function() {
        return '';
      }
    }
  },

  data() {
    return {
      //
    }
  },

  methods: {
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY');
    },

    gotoPost(val) {
      this.$router.push({ path: val.path });
    },

    /*
      @param string
      @return [object]
    */
    getPostsByCategory(category) {
      return this.$site.pages
        .filter(v => v.regularPath.includes(category))
        .filter(v => {
          return this.getPostDateFromUrl(v.path);
        })
        .map(obj => {
          return {
            ...obj,
            date: this.getPostDateFromUrl(obj.path)
          }
        })
        .sort((a, b) => {
          let dateA = this.getPostDateFromUrl(a.path)
          let dateB = this.getPostDateFromUrl(b.path)
          return new Date(dateB) - new Date(dateA)
        })
    },

    /*
      @param string
      @return string
    */
    getPostDateFromUrl(val) {
      let date = /(\d\d\d\d-\d\d-\d\d)/g.exec(val);
      return date && date[0];
    },

    openDialogPost(val) {
      this.$emit('onSelectedPost', {
        dialog: true,
        selectedPost: val
      })
    },
  },
}
</script>

<style scoped>
.postItem {
  min-width: 200px;
}
</style>