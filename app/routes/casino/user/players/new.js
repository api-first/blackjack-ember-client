import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({

  sessionUser: service('session-user'),

  model() {
    let self = this;
    return this.get('sessionUser.user').then(function(user) {
      return self.get('store').createRecord('player', { user: user,});
    });
  },

  actions: {
  }
});
