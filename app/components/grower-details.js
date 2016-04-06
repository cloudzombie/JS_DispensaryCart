import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['type:desc'],
  growerStrains: Ember.computed.sort('grower.strains', 'sortBy'),

});
