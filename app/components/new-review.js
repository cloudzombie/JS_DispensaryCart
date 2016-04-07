import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  sortBy: ['review:desc']
  actions: {
    growerReviewShow() {
      this.set('addNewReview', true);
    },
    sendReview() {
      var params = {
        rating: this.get('rating') ? this.get('rating') : "",
        name: this.get('name') ? this.get('name') : "Unknown user",
        review: this.get('review') ? this.get('review') : "",
        grower: this.get('grower') ? this.get('grower') :""
      };
      this.set('addNewReview', false);
      this.sendAction('sendReview', params);
    }
  }
});
