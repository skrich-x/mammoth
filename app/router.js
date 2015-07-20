import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', {path: '/'});

  this.route('sessions', function() {
    this.route('create');
    this.route('destroy');
  });

  // this.route('users.current', {path: 'me'});
  this.route('users', function() {
    this.route('create');
    this.route('show', {path :':parse-user_id'});
    this.route('current');
  });

  this.route('tasks', function() {
    this.route('create');
    this.route('createSubtask');
  });

  this.route('mammoth', function() {
    this.route('about');
  });
});

export default Router;
