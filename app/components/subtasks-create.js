import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createSubtask: function(){
      var task = this.get('model');
      var subtaskObject = {
        subtaskName: this.get('subtaskName'),
        priority: 0
      };
      task.get('subtaskArray').pushObject(subtaskObject);
      this.setProperties({
        subtaskName: '',
        priority: 0,
        subtaskDueDate: ''
      });

      this.sendAction('save');
    },

    removeSubtask: function(subtaskObject){
      var subtaskArray = this.get('model.subtasks');
      subtaskArray.removeObject(subtaskObject);
      this.sendAction('save');
    },
  }
});
