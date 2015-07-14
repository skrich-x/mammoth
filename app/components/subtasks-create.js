import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createSubtask: function() {
      this.sendAction('action', this.get('model'));

    }
  }
});
