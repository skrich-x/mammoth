import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  taskName: DS.attr('string'),
  dueDate: DS.attr('date'),
  owner: DS.belongsTo('parseUser'),

  defaults: function() {
    if (!this.get('subtaskArray')) {
      this.set('subtaskArray', []);
    }
  }.on('ready'),

  subtaskArray: DS.attr(),
  subtasks: Ember.computed.alias('subtaskArray'),

  updateSubtaskDates: function() {
    var today = moment(new Date());
    var dueDate = moment(new Date(this.get('dueDate')));
    var diff = dueDate.diff(today, 'days');
    var subtasks = this.get('subtaskArray');
    var spread = diff/subtasks.length;

    subtasks.forEach(function(subtask, index) {
      var today = moment(new Date());
      var dueDate = today.add(spread*(index+1), 'days').toDate();
      console.log(subtask);
        Ember.set(subtask, 'subtaskDueDate', dueDate);
    });

    return this.get('subtaskArray', 'dueDate');

  }.observes('subtaskArray.[]', 'dueDate'),

  calendarEvents: function(){
    return [
      {
        title: this.get("taskName"),
        start: this.get('dueDate')
      }
    ];
  }.property('taskName', 'dueDate', 'substasks.@each')
});
