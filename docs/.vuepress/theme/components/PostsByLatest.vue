<template>
  <div>
    <h3 class="mb-6">latest codebits</h3>

    <v-row>
      <v-col class="post-thumb" v-for="(val, ind) in getLatestPost()">
        <img :src="val.frontmatter.img"
          @click="openDialogPost(val)"
        />

        <div @click="gotoPost(val)">
          <h4>{{ val.frontmatter.title }}</h4>
          <h6>date</h6>
        </div>
      </v-col>
    </v-row>
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