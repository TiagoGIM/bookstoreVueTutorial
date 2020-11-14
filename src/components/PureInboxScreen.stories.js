//src/components/PureInboxScreen.stories.js
import Vue from 'vue';
import Vuex from 'vuex';
import PureInboxScreen from './PureInboxScreen.vue';
import { action } from '@storybook/addon-actions';
import { defaultTasksData } from './PureTaskList.stories';
Vue.use(Vuex);
//mocking a store for child element wich need reciev data sotre for render (Tasklist) 
export const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData,
  },
  actions: {
    pinTask(context, id) {
      action('pinTask')(id);
    },
    archiveTask(context, id) {
      action('archiveTask')(id);
    },
  },
});
export default {
  title: 'PureInboxScreen',
  excludeStories: /.*store$/,
};
export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen/>`,
  store,   //this objects its necessary for child component tasklist
});
// tasklist with pinned tasks
export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true"/>`,
});