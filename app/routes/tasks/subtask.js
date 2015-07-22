import Ember from 'ember';

export default Ember.Route.extend({

actions:{

  destroyTask: function(){
    this.sendAction('action', this.get('model'));
  }
  }
});
