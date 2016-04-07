import DS from 'ember-data';

export default DS.Model.extend({
  review: DS.attr(),
  grower: DS.belongsTo('grower', {async: true}),
  strain: DS.belongsTo('strain', {async: true})
});
