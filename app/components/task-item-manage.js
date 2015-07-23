import Ember from 'ember';

export default Ember.Component.extend({

  subtaskChecked: function(){
    this.get('task').save();
  }.observes('task.subtasks.@each.isComplete')
});
