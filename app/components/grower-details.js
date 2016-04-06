import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStrain(params){
      this.sendAction('saveStrain', params);
    },
    destroyStrain(strain) {
      if(confirm('Are you sure?')) {
        this.sendAction('destroyStrain', strain);
      }
    },
    updateStrain(strain, params) {
      this.sendAction('updateStrain', strain, params);
    },
  }
});
