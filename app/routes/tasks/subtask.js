import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      events: Ember.A([
        {title: "Hackathon", start: Date.now()},
      ])
    };
  }

  // model: function(){
  //   return this.store.createRecord('subtask');
  // },
  //
  // actions: {
  //   createSubtask: function(subtask){
  //     console.log(subtask.get('name'));
  //   },
  // }
});
