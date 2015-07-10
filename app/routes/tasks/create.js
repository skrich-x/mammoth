import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return this.store.createRecord('task');
  },

  actions: {
    createTask: function(task){
      console.log(task.get('name'));
    },

    createSubtask: function(){
      console.log('create Subtask Button');
    },
  }
});
