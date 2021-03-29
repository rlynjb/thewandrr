<template>
  <div>
    <h2 class="font-weight-medium">latest codebits</h2>

    <div class="d-flex">
      <div class="post-thumb col-3" v-for="(val, ind) in getLatestPost()">
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
    postAmount: {
      required: false,
      type: Number,
      default: function() {
        return 1;
      }
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY');
    },

    /*
      @param string
      @return string
    */
    getPostDateFromUrl(val) {
      let date = /(\d\d\d\d-\d\d-\d\d)/g.exec(val);
      return date && date[0];
    },

    gotoPost(val) {
      this.$router.push({ path: val.path });
    },

    /*
      @return [object]
    */
    getLatestPost() {
      let final = this.$site.pages
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
        .splice(0, this.postAmount);

      return final
    },

    openDialogPost(val) {
      this.$emit('onSelectedPost', {
        dialog: true,
        selectedPost: val
      })
    },
  }
}
</script>