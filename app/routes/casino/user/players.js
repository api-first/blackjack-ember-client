import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('casino.user').get('players');
  },

  actions: {
    destroyPlayer(player) {
      player.destroyRecord();
    }
  }
});
