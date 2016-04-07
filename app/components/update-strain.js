import Ember from 'ember';

export default Ember.Component.extend({
  updateStrainForm: false,
  actions: {
    strainFormShow() {
      this.set('updateStrainForm', true);
    },
    update(strain) {
      var params = {
        name: this.get('name'),
        type: this.get('type'),
        thc: this.get('thc'),
        cbd: this.get('cbd'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
      };
      this.set('updateStrainForm', false);
      this.sendAction('updateStrain', strain, params);
    }
  }
});
