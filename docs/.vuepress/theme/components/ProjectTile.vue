<template>
<v-col :class="'pa-16 text-center ' + color">
  <h3 v-if="comingsoon">Coming Soon</h3>
  <img :src="$site.base + '/' + img" />
</v-col>
</template>

<script>
export default {
  props: {
    color: {
      requred: true,
      type: String,
      default: () => {
        return 'black'
      }
    },
    comingsoon: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    img: {
      required: false,
      type: String,
      default: () => {
        return ''
      }
    },
  }
}
</script>