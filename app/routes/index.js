import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      strains: this.store.findAll('strain'),
      growers:  this.store.findAll('grower')
    });
  },
  actions: {
    saveGrower(params) {
      var newGrower = this.store.createRecord('grower', params);
      newGrower.save();
      this.transitionTo('index');
    },

    destroyGrower(grower) {
      grower.destroyRecord();
      this.transitionTo('index');
    }
  }
});
