import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('registration', function() {
    this.route('users', function() {
      this.route('new');
    });
    this.route('login');
  });
  this.route('casino', { path: '/' }, function() {
    this.route('user', { path: 'users/:user_id' }, function() {
      this.route('players', function() {
        this.route('new');
      });
    });
  })
});

export default Router;
