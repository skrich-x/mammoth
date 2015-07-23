/* globals $ */

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveTask: function() {
      this.sendAction('action', this.get('model'));
    },

    destroyTask: function(task) {
      this.sendAction('action', task);
    },


    markComplete: function() {
      $(".completedTask").click(function() {
        $(".markAsComplete").toggle();
      });
    }
  }
});
