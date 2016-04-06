import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('strain', params.strain_id);
  }
});
