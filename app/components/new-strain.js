import Ember from 'ember';

export default Ember.Component.extend({
  addNewStrain: false,
  sortBy: ['date:desc'],
  growerStrains: Ember.computed.sort('grower.strains', 'sortBy'),
  actions: {
    strainFormShow() {
      this.set('addNewStrain', true);
    },
    saveStrain() {
      var params = {
        name: this.get('name') ? this.get('name') : "Default String",
        type: this.get('type') ? this.get('type') : "default string",
        thc: this.get('thc') ? this.get('thc') : "default string",
        cbd: this.get('cbd') ? this.get('cbd') : "default string",
        image: this.get('image') ? this.get('image') : "default string",
        grower: this.get('grower') ? this.get('grower'):""
      };
      this.set('addNewStrain', false);
      this.sendAction('saveStrain', params);
    }
  }
});
