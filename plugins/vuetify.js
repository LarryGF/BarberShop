import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  theme: {
    primary: "#d9a154"
  },
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar
  },
  directives: {
    Ripple
  }
})
