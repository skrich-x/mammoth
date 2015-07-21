import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return this.store.createRecord('task',{
      owner: this.get('session.currentUser')
    });
  },

  actions: {
    saveTask: function(){
      var model = this.modelFor(this.routeName);
      model.save();
    },

    invalidateSession: function() {
      this.get('session').invalidate();
    },

  }

});
