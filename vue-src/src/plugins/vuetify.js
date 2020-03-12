import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import it from 'vuetify/es5/locale/it';
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

Vue.use(Vuetify);

export default new Vuetify({
    preset,
    lang: {
        locales: { it },
        current: 'it',
    },
    icons: {
        iconfont: 'fa',
    },
});
