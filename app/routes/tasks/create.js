import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return this.store.createRecord('task');
  },

  actions: {
    createTask: function(task){
      console.log(task.get('taskname'));
    },

    createSubtask: function(subtask){
      console.log(subtask.get('subtaskname'));
    },
    //
    // calendar: function() {
    //     return {
    //       events: Ember.A([
    //         {ti tle: "Test", start: Date.now()},
    //       ])
    //     };
    //   }
    }
});
