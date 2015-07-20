import Ember from 'ember';

export default Ember.Component.extend({
  model: function(){
    return this.get ('session.currentUser');
  },

  actions: {
    createTask: function() {
      this.sendAction('action', this.get('model'));
      // var events=[];
      // this.events.pushObject(newEvent);
      // this.$("#calendar").fullCalendar('renderEvent', newEvent, true);

    },

    invalidateSession: function() {
      this.get('session').invalidate();
    },

  //
  //   addEvent: function() {
  //   var newEvent = [];
  //   this.events.pushObject(newEvent);
  //   this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
  // }

  }
});
//
// $('#calendar').fullCalendar({
//     events: function(start, end, timezone, callback) {
//                 var events = [];
//                 $(doc).find('event').each(function() {
//                     events.push({
//                         title: $(this).attr('title'),
//                         start: $(this).attr('start') // will be parsed
//                     });
//                 });
//                 callback(events);
//
//         });
//     }
// });
