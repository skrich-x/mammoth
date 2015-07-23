import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveTask: function() {
      var model = this.modelFor(this.routeName);
      model.save();
    },
  }
});
