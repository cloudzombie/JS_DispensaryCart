import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  grow: DS.attr(),
  reviews: DS.hasMany('review', {aysnc: true}),
  strains: DS.hasMany('strain', {async: true})
});
