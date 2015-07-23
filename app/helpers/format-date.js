import Ember from 'ember';

export function formatDate(params) {
  var date = params[0];
  return moment(date).format('YYYY Mo dd');
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
