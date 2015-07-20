import Ember from 'ember';

export default Ember.Component.extend({

  _initializeCalendar: (function() {
    return $("#calendar").fullCalendar({
      googleCalendarApiKey: 'AIzaSyB6-NLaDa-cA5XhaKPDp2mHKUhnk7L0cBI',
              events: [{
                  googleCalendarId: 'tiymammoth@gmail.com',
                  title: "newEvent",
                  start:'2015-07-24T05:00:00'
                }],
                   selectable: true,
                   editable: true,
                   header: {
                           left: 'prev,next today',
                           center: 'title',
                           right: 'month,agendaWeek,agendaDay'
                         }

      // events: this.theEvents
    });
  }).on("didInsertElement")

});
