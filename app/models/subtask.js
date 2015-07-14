import DS from 'ember-data';

export default DS.Model.extend({
  subtaskname: DS.attr('string'),
  date: DS.attr('date'),

});
