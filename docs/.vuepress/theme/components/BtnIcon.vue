<template>
<v-btn
  icon
  :href="hrefLink"
  :target="target">
  <v-icon :size="size">
    {{ iconName }}
  </v-icon>
</v-btn>
</template>

<script>
export default {
  props: ['hrefLink', 'target', 'iconName', 'size'],
}
</script>