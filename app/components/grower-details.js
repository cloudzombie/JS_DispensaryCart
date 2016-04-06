import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStrain(params){
      this.sendAction('saveStrain', params);
    }
  }
});
