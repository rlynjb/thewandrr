<template>
<div class="d-flex">
  <div class="mr-6"
    v-for="val in getPostsByCategory(category)"
  >
    <div class="post-thumb">
      <img :src="val.frontmatter.img"
        @click="openDialogPost(val)"
      />

      <div @click="gotoPost(val)">
        <h4>{{ val.frontmatter.title }}</h4>
        <h6>{{ getPostDateFromUrl(val.path) }}</h6>
      </div>
    </div>
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