import Ember from 'ember';

export default Ember.Component.extend({

  dateValueSetter: function(){
    var dateString= this.get('dateString');
    var dateArray= dateString.split("-");
    dateArray[1]= dateArray[1]-1;
    var date= new Date(
      dateArray[0],
      dateArray[1],
      dateArray[2]
    );
    this.set('dateValue', date);
  }.observes('dateString')
 });
