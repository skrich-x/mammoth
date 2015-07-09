/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mammoth',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      applicationId: 'IyPtqWAaNuoEHXxJTdXBJntno7vKMzkOyqiJIDaQ',
      restApiId: 'zdODLArmeXuCcOrUrxGiO5Yv4VgJli4T77COxztA'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' api.parse.com ",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },

    'simple-auth': {
      authenticationRoute: 'sessions.create',
      routeAfterAuthentication: 'users.current',
      routeIfAlreadyAuthenticated: 'users.current',
      authorizer: 'authorizer:parse',
      crossOriginWhitelist: ['https://api.parse.com']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
