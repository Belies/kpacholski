import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({theme: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#cd000c',
  },
  icons: {
    iconfont: 'mdi',
  },
});
