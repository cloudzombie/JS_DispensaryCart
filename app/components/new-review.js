import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    growerReviewShow() {
      this.set('addNewReview', true);
    },

    saveReview() {
      var params = {
        percentage: this.get('percentage') ? this.get('percentage') : "Default Rating"
      }
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
