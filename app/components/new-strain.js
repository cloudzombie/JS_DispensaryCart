import Ember from 'ember';

export default Ember.Component.extend({
  addNewStrain: false,
  sortBy: ['thc:desc'],
  growerReviews: Ember.computed.sort('grower.reviews', 'sortBy'),
  actions: {
    strainFormShow() {
      this.set('addNewStrain', true);
    },
    saveStrain() {
      var params = {
        name: this.get('name') ? this.get('name') : "Default Name",
        type: this.get('type') ? this.get('type') : "Default Type",
        thc: this.get('thc') ? this.get('thc') : "Default THC",
        cbd: this.get('cbd') ? this.get('cbd') : "Default CBD",
        price: parseInt(this.get('price')) ? this.get('price') : 0,
        image: this.get('image') ? this.get('image') : "http://www.memepile.com/pics/3963-o.jpg",
        grower: this.get('grower') ? this.get('grower'):""
      };
      this.set('addNewStrain', false);
      this.sendAction('saveStrain', params);
    }
  }
});
