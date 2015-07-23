import Ember from 'ember';

export default Ember.Component.extend({

  subtaskChecked: function(){
    this.get('task').save();
  }.observes('task.subtasks.@each.isComplete'),

  actions:{
  destroyTask: function(task) {
    this.sendAction('destroyTask', task);

  },
  markComplete: function(task){
    this.sendAction('markComplete', task);
    console.log('mark');

  }
}
});
