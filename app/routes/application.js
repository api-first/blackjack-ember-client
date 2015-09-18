import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {

  session: service('session'),

  sessionUser: service('session-user'),

  actions: {
    transitionToLoginRoute() {
      this.transitionTo('registration');
    },
    sessionAuthenticationSucceeded() {
      console.log('...');
    },
    login(username, password) {
      let credentials = { identification: username, password: password };
      this.get('session').authenticate('authenticator:oauth2', credentials).catch((reason) => {
        this.controllerFor('registration.login').setProperties({
          isError: true, username: null, password: null
        });
      });;
    }
  }
});
