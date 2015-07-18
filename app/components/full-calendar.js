import Ember from 'ember';

export default Ember.Component.extend({

  newEvent: "",
    eventTitle: "",

    _initializeCalendar: (function() {
      return $("#calendar").fullCalendar({
        events: this.theEvents
      });
    }).on("didInsertElement"),

    actions: {
      addEvent: function() {
        var newEvent = {title: this.eventTitle, start: this.newEvent, allDay: false};
        this.theEvents.pushObject(newEvent);
        this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
      }
    }
});
