import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('menu');
  this.route('grower', {path: '/grower/:grower_id'});
  this.route('strain', {path: '/strain/:strain_id'});
});

export default Router;
