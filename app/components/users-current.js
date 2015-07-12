import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    invalidateSession: function() {
      this.sendAction('action', this.get('model'));
    },

    model: function(){
      return this.get ('session.currentUser');
    },
//     fullCallendar: function(){
//     $(document);ready(function() {
//     $('#calendar');fullCalendar({
//         googleCalendarApiKey: 'AIzaSyB6-NLaDa-cA5XhaKPDp2mHKUhnk7L0cBI',
//         events: {
//             googleCalendarId: 'tiymammoth@gmail.com'
//         }
//     });
// });
// }

  
  }
});
