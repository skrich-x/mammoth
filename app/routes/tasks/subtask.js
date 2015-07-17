import Ember from 'ember';

export default Ember.Route.extend({

actions:{

  addEvent: function() {
      var newEvent = {title: this.eventTitle, start: this.newEvent, allDay: true};
      this.theEvents.pushObject(newEvent);
      this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
    }
  }
});
