import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      strains: this.store.findAll('strain'),
      growers:  this.store.findAll('grower')
    });
  }
});
