import Ember from 'ember';
import layout from '../templates/components/mammoth/app-about';

export default Ember.Component.extend({

      actions: {
          toggleModal: function() {
              this.toggleProperty('enabled');
          }
      },
      layout: layout
});
