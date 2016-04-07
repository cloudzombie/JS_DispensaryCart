import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
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
    },
    updateGrower(grower, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          grower.set(key, params[key]);
        }
      });
      grower.save();
      this.transitionTo('index');
    },

    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
  }
});
