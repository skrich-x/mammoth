import Ember from 'ember';

export default Ember.Component.extend({


  actions: {
    saveTask: function() {
      this.sendAction('action', this.get('model'));
    },

    invalidateSession: function() {
      this.get('session').invalidate();
    },

}
});
