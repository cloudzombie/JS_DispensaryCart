import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  thc: DS.attr(),
  cbd: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  grower: DS.belongsTo('grower', {async: true})
});
