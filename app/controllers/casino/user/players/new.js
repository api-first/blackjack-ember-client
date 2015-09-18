import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    create() {
      let self = this;
      let onSuccess = function(player) {
        self.transitionToRoute('casino.user.players');
      };
      this.get('model').save().then(onSuccess);
    }
  }

});
