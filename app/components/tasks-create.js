import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createTask: function() {
      this.sendAction('action', this.get('model'));
    }
  }
});