<template>
<v-carousel
  v-model="modelLocal"
  :show-arrows="imgs.length ? true : false"
  :hide-delimiters="imgs.length ? false : true"
  hide-delimiters
>
  <v-carousel-item v-if="cover != ''">
    <img :src="'/' + cover" />
  </v-carousel-item>

  <v-carousel-item
    v-for="(img, ind) in imgs"
  >
    <h4>{{ img[Object.keys(img)[0]] }}</h4>
    <img :src="'/' + Object.keys(img)[0]" />
  </v-carousel-item>
</v-carousel>
</template>

<script>
export default {
  props: {
    imgs: {
      required: false,
      type: Array,
      default: function() {
        return [];
      }
    },
    model: {
      required: false,
      type: Number,
      default: () => {
        return 0;
      }
    },
    cover: {
      required: false,
      type: String,
      default: () => {
        return '';
      }
    },
  },

  data() {
    return {
      modelLocal: JSON.parse(this.model)
    }
  },

  watch: {
    model(val) {
      this.modelLocal = JSON.parse(val);
    },
  },

  methods: {
    resetCarousel() {
      this.modelLocal = 0;
    }
  },
}
</script>