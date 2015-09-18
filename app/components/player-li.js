import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    edit() {
      this.set('isEditing', true);
    },
    cancelEdit() {
      this.set('isEditing', false);
    },
    destroy() {
      this.get('player').destroyRecord();
    },
    update() {
      let self = this;
      this.get('player').save().then(function() {
        self.set('isEditing', false);
      })
    }
  }
});
