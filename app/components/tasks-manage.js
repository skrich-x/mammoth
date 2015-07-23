/* globals $ */

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveTask: function(task) {
      this.sendAction('action', task);
    },

    destroyTask: function(task) {
      this.sendAction('action', task);
    },

    markComplete: function(){
      $("manage-subtask li").change(function(){
        if($(this).is(":checked")){
          console.log('checked');
          $(this).addClass("line-through");
        }else{
          $(this).removeClass("line-through");
        }
      });

    }
  }
});
