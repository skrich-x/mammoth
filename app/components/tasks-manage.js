/* globals $ */

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    destroyTask: function(task) {
      this.sendAction('destroyTask', task);
    },

    }
});
