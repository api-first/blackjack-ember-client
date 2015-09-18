import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({

  session: service('session'),

  username: null,

  password: null,

  actions: {
    loginUser() {
      this.send("login", this.get('username'), this.get('password'));
    }
  }

});
