<template>
  <div>
    <h3 class="mb-6">latest codebits</h3>

    <div class="d-flex">
      <div class="post-thumb mr-4" v-for="(val, ind) in getLatestPost()">
        <img :src="val.frontmatter.img"
          @click="openDialogPost(val)"
        />

        <div @click="gotoPost(val)">
          <h4>{{ val.frontmatter.title }}</h4>
          <h6>date</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        .sort((a, b) => {
          let dateA = Number(new Date(this.getPostDateFromUrl(b.path)))
          let dateB = Number(new Date(this.getPostDateFromUrl(a.path)))
          return dateA - dateB
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