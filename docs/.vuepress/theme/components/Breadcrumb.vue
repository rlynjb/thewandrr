<template>
  <v-breadcrumbs :items="items()">
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    page: {
      required: false,
      type: Object,
      default: function() {
        return {};
      }
    },
    disable: {
      required: false,
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
    }
  },

  methods: {
    cleanBreadcrumbTitle(val) {
      return val[0].toUpperCase() + val.slice(1).toLowerCase()
    },
    items() {
      let trail = this.page.path.split('/');
      let trailLastIndex = '';
      let items = [];

      trail.forEach((v, i) => {
        if (i === 0) {
          items.push({
            text: 'Home',
            href: '/'
          })
        }

        if (i && trail.length - 1 != i) {
          items.push({
            text: this.cleanBreadcrumbTitle(v),
            href: this.disable.includes(i) ? '' : trailLastIndex + '/' + v
          });

          trailLastIndex = trailLastIndex + '/' + v;
        }

        if (i === trail.length - 1) {
          items.push({
            text: this.$page.title,
            href: ''
          })
        }

      });

      return items;
    }
  }
}
</script>

<style scoped>
.v-breadcrumbs {
  padding: 0;
}
</style>