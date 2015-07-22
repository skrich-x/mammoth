import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    destroyTask: function(task) {
      this.sendAction('action', task);
    },

    markComplete: function(){
      $( "#button" ).click(function() {
        $( "fa" ).toggle();
    });
    }
  }
});
