import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createSubtask: function(){
      console.log('create Subtask Button');
    }
  }
});
