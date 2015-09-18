import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  sessionUser: service('session-user'),

  username: '',

  password: '',

  actions: {
    logout() {
      this.get('session').invalidate();
    },
  }
});
