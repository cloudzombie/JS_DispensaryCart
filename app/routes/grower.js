import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('grower', params.grower_id);
  },
  actions: {
    saveStrain(params) {
      var newStrain = this.store.createRecord('strain', params);
      var grower = params.grower;
      grower.get('strains').addObject(newStrain);
      newStrain.save().then(function() {
        return grower.save();
      });
      this.transitionTo('grower', params.grower);
    },
    destroyStrain(strain) {
      strain.destroyRecord();
      this.transitionTo('grower');
    },
    updateStrain(strain, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          strain.set(key, params[key]);
        }
      });
      strain.save();
      this.transitionTo('index');
    }
  }
});
