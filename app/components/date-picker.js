import Ember from 'ember';

function yyyymmdd() {
  var today = new Date();
  var yyyy = today.getFullYear().toString();
  var mm = (today.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = today.getDate().toString();
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]); // padding
};

export default Ember.Component.extend({

  dateString: yyyymmdd(),

  focusOut: function() {
    this.sendAction('focus-out');
  },

  dateValueSetter: function(){
    var dateString = this.get('dateString');
    var dateArray = dateString.split("-");
    dateArray[1] = dateArray[1] - 1;
    var date = new Date(
      dateArray[0],
      dateArray[1],
      dateArray[2]
    );
    this.set('dateValue', date);
  }.observes('dateString').on('init'),

 });
