import EmberRouter from '@ember/routing/router';
import config from 'embroider-macros-min-repro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
