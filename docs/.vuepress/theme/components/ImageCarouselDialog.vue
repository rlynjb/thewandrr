<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(img, ind) in imgs"
      >
        {{ ind + 1 }}
        <h3>{{ img[Object.keys(img)[0]] }}</h3>
        <img :src="Object.keys(img)[0]" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
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
    dialog: {
      required: false,
      type: Boolean,
      default: function() {
        return false;
      }
    },
    model: {
      required: false,
      type: Number,
      default: () => {
        return 0;
      }
    }
  },

  data() {
    return {
      //
    }
  },

  methods: {
    //
  },
}
</script>