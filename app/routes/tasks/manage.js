import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('task');
  },

  actions: {

    destroyTask: function(task) {
      task.destroyRecord();
    },

    markComplete: function(task){
      this.sendAction('markComplete', task);
      console.log('mark');

    }
  }
});
