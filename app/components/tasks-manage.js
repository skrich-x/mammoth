/* globals $ */

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    destroyTask: function(task) {
      console.log('3');
      this.sendAction('destroyTask', task);
      console.log('4');
    },

    markComplete: function(task){
      this.sendAction('markComplete', task);
      console.log('mark');
      // if(this.$('.taskComplete').hasClass("complete")){
      //     $(this).removeClass("complete");
      //   }else{
      //     $(this).addClass("complete");
      // }
      }
    }
});
