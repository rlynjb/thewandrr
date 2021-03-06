<template>
  <div>
    <div class="post-thumb"
      @click="gotoPost(getLatestPost()[0])"
    >
      <h3>latest codebits</h3>
      <img :src="getLatestPost()[0].frontmatter.img" />
      <h2>{{ getLatestPost()[0].frontmatter.title }}</h2>
    </div>

    <v-btn
      @click="openDialogPost(getLatestPost()[0])">
      preview
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    /*
      @param string
      @return string
    */
    getPostDate(val) {
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
          return this.getPostDate(v.path);
        })
        .sort((a, b) => {
          let dateA = Number(new Date(this.getPostDate(b.path)))
          let dateB = Number(new Date(this.getPostDate(a.path)))
          return dateA - dateB
        });

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