import Ember from 'ember';

export function formatDate(params) {
  var date = params[0];
  return moment(date).format("dddd, MMMM Do YYYY");
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
