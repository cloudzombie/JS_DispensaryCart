import Ember from 'ember';

export default Ember.Component.extend({
  updateGrowerForm: false,
  actions: {
    growerFormShow() {
      this.set('updateGrowerForm', true);
    },
    update(grower) {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        type: this.get('type'),

      };
      this.set('updateGrowerForm', false);
      this.sendAction('updateGrower', grower, params);
    }
  }
});
