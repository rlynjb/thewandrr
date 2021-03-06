<template>
<v-app class="theme-container">
  <header-theme />

  <v-main>
    <v-container class="pt-16 pb-16">
      <v-breadcrumbs :items="items"></v-breadcrumbs>

      <h1>{{ $page.title }}</h1>
      <Content />
    </v-container>
  </v-main>

  <footer-theme />
</v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';

export default {
  components: {
    headerTheme,
    footerTheme
  },
  data() {
    return {
      items: []
    }
  },

  created() {
    console.log(this.$page)

    this.items = [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'Codebits',
        disabled: false,
        href: '/codebits',
      },
      {
        text: 'JavaScript',
        disabled: false,
        href: '/codebits/javascript',
      },
      {
        text: this.$page.title,
        disabled: true,
        href: '',
      },
    ]
  },
}
</script>

<style lang="styl">

</style>