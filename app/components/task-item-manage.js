import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings:['isComplete'],

  isComplete: Ember.computed.alias('task.isComplete'),

  subtaskChecked: function(){
    this.get('task').save();
  }.observes('task.subtasks.@each.isComplete'),

  actions:{
  destroyTask: function(task) {
    this.sendAction('destroyTask', task);

  },
  markComplete: function(task){
    task.toggleProperty('isComplete');
    task.save();
  }
}
});
