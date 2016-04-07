import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  review: DS.attr(),
  rating: DS.attr(),
  grower: DS.belongsTo('grower', {async: true})
});
