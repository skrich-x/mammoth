import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    invalidateSession: function() {
      this.sendAction('action', this.get('model'));
    },

    model: function(){
      return this.get ('session.currentUser');
    }
  }
});
