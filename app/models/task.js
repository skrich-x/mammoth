import DS from 'ember-data';

export default DS.Model.extend({
  taskName: DS.attr('string'),
  dueDate: DS.attr('date'),
  // owner: DS.belongsTo('parseUser'),


  defaults: function() {
    if (!this.get('subtaskArray')) {
      this.set('subtaskArray', []);
    }
  }.on('ready'),

  // Write only
  subtaskArray: DS.attr(),

  // Read only
  subtasks: function() {
    var today = moment(new Date());
    var dueDate = moment(new Date(this.get('dueDate')));
    var diff = dueDate.diff(today, 'days'); //86
    var tasks = this.get('subtaskArray');
    var spread = diff/tasks.length;

    tasks.forEach(function(task, index) {
      var today = moment(new Date());
      var dueDate = today.add(spread*(index+1), 'days').toDate();
        task.set('subtaskDueDate', dueDate);
    });

    return this.get('subtaskArray', 'dueDate');

  }.property('subtaskArray.[]', 'dueDate')
});
