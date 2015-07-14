import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return this.store.createRecord('task');
  },

  actions: {
    createTask: function(task){
      console.log(task.get('taskname'));
      console.log(task.get('date'));
    },

    createSubtask: function(subtask){
      console.log(subtask.get('subtaskname'));
    },

    invalidateSession: function() {
      this.get('session').invalidate();
    },

  }

});
