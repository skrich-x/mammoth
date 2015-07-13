import DS from 'ember-data';

export default DS.Model.extend({
  taskname: DS.attr('string'),
  date: DS.attr('date')
});
