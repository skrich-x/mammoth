import Ember from 'ember';
import layout from '../templates/components/app-about';

export default Ember.Component.extend({
      expose: function() {
        var app_controller = this.get('targetObject');
        var exposedName = "comp-" + this.get('id');
        app_controller.set(exposedName, this);
        }.on('init'),

      layout: layout,

      actions: {
          toggleModal: function() {
              this.toggleProperty('enabled');
          },

          closeModal: function(){
             this.toggleProperty('enabled');
          }
        }
});
