import Ember from 'ember';

export default Ember.Component.extend({

  subtaskChecked: function(){
    this.get('task').save();
  }.observes('task.subtasks.@each.isComplete'),

  actions:{
  destroyTask: function(task) {
    console.log("1");
    this.sendAction('destroyTask', task);
    console.log("2");
  }
}
});
