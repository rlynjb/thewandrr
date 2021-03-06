<template>
<div class="d-flex">
  <div class="mr-6"
    v-for="val in getPostsByCategory(category)"
  >
    <div class="post-thumb"
      @click="gotoPost(val)"
    >
      <img :src="val.frontmatter.img" />
      <h4>{{ val.frontmatter.title }}</h4>
      <h6>{{ getPostDate(val.path) }}</h6>
    </div>

    <v-btn
      @click="openDialogPost(val)">
      preview
    </v-btn>
  </div>
</div>
</template>

<script>
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
    gotoPost(val) {
      this.$router.push({ path: val.path });
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

    openDialogPost(val) {
      this.$emit('onSelectedPost', {
        dialog: true,
        selectedPost: val
      })
    },
  },
}
</script>