import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return this.store.createRecord('task');
  },

  actions: {
    createTask: function(task){
      console.log(task.get('taskName'));
      console.log(task.get('dueDate'));
      console.log(task);
    },

    createSubtask: function(subtaskObject){
      var subtask =subtaskObject.get('subtaskName');
      // this.push(subtask.get('subtaskName'));
      console.log(subtask);
      var array = subtaskObject._attributes.subtaskArray;
      array.push(subtask);
      console.log(array);
    },

    invalidateSession: function() {
      this.get('session').invalidate();
    },

  }

});
