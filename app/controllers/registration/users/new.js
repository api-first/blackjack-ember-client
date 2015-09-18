import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  queryParams: ['isError'],

  actions: {
    save() {
      var self = this;
      this.get('model').save().then(
        function(user) {
          if (!self.get('session.isAuthenticated')) {
            self.send('login',
              self.get('model.username'),
              self.get('model.password')
            );
          } else {
            self.transitionToRoute('application');
          }
        }
      );
    }
  }
});
