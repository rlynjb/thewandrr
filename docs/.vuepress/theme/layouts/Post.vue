<template>
<v-app class="theme-container">
  <header-theme />

  <v-main>
    <v-container class="pt-16 pb-16">
      <breadcrumb
        :page="$page"
        :disable="[1, 2]"
      />

      <h1>{{ $page.title }}</h1>
      <h5>{{ $page.frontmatter.date ? $page.frontmatter.date : '' }}</h5>

      <Content class="mt-10" />
    </v-container>
  </v-main>

  <footer-theme />
</v-app>
</template>

<script>
import headerTheme from '../components/Header';
import footerTheme from '../components/Footer';
import breadcrumb from '../components/Breadcrumb';

export default {
  components: {
    headerTheme,
    footerTheme,
    breadcrumb,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="styl">

</style>