import Ember from 'ember';

export default Ember.Component.extend({

  _initializeCalendar: (function() {
    return $("#calendar").fullCalendar({
      googleCalendarApiKey: 'AIzaSyB6-NLaDa-cA5XhaKPDp2mHKUhnk7L0cBI',
              events: {
                  googleCalendarId: 'tiymammoth@gmail.com'
              },
      // events: this.theEvents
    });
  }).on("didInsertElement")
});

  // gCal: function(){
  //     $('#calendar').fullCalendar({
  //         googleCalendarApiKey: 'AIzaSyB6-NLaDa-cA5XhaKPDp2mHKUhnk7L0cBI',
  //         events: {
  //             googleCalendarId: 'tiymammoth@gmail.com'
  //         }
  //     });
  //   }
