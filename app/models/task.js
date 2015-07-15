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

    // return an array of subtasks with computed dates added to each one
    //return this.get('subtaskArray').map(...)
  }.property('subtaskArray', 'date')
});
