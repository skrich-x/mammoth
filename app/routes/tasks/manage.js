import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('task');
  },

  actions: {

    destroyTask: function(task) {
      console.log("route");
      task.destroyRecord();
    },

    markComplete: function(){

    }
}
});
