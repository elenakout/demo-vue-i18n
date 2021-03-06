import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './lang/index';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'gr',
  fallbackLocale: 'en',
  messages,
});
