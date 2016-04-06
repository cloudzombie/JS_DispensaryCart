import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(grower) {
      if(confirm('Are you sure you want to delte this grower?')) {
        this.sendAction('destroyGrower', grower);
      }
    }
  }
});
