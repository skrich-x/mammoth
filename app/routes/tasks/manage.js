import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('task');
  },

  actions: {

    destroyTask: function(task) {
      this.get('manage.task').destroyRecord(task);
    }
  }
});
