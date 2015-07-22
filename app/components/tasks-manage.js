import Ember from 'ember';

export default Ember.Component.extend({

  actions:{

    removeSubtask: function(subtaskObject){
      var subtaskArray = this.get('model.subtaskArray');
      subtaskArray.removeObject(subtaskObject);
      this.sendAction('save');
    },
  }
});
