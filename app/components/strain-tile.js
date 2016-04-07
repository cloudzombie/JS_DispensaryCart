import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyStrain(strain) {
      if(confirm('Are you sure?')) {
        this.sendAction('destroyStrain', strain);
      }
    },
  }
});
