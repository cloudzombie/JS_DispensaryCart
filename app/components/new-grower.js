import Ember from 'ember';

export default Ember.Component.extend({
  growerFormShow: false,
  actions: {
    save() {
      var params = {
        name: this.get('name') ? this.get('name') : "unknown grower",
        location: this.get('location') ? this.get('location') : "disclosed location",
        grow: this.get('grow') ? this.get('grow') : "both",
      };
      this.set('growerFormShow', false);
      this.sendAction('saveGrower', params);
    },
    growerFormReveal() {
      this.set('growerFormShow', true);
    }
  }
});
