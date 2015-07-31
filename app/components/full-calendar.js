/* globals $ */
import Ember from 'ember';

export default Ember.Component.extend({

  _initializeCalendar: function() {
    $("#calendar").fullCalendar({
      selectable: true,
      editable: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
    });
  }.on("didInsertElement"),

  rerenderCalendar: function(){
    Ember.run(function(){
      $("#calendar").fullCalendar("removeEvents");
      $("#calendar").fullCalendar("addEventSource", this.get('model.calendarEvents'));
    }.bind(this));
  }.observes('model.dueDate').on('init')
});
