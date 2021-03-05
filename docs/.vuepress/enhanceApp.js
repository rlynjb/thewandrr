import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from 'vuetify/lib/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({
    icons: {
      iconfont: 'fa',
    },
    theme: {
      dark: {
        primary: colors.purple.lighten3,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        anchor: colors.purple.lighten3
      }
    }
  })
};