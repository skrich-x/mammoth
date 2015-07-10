import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createTask: function(){
      // user.set('task', user.get('task'));
      console.log('create Task button');

    }
  }
});
