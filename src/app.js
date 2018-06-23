import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';

import Router from './config/routes';

import MainCtrl from './controllers/main';
import favourIndexController from './controllers/favours/index';
import userIndexController from './controllers/users/index';
import userShowController from './controllers/users/show';

angular.module('favourAPI', ['ui.router'])
  .config(Router)
  .controller('MainCtrl', MainCtrl)
  .controller('favourIndexController', favourIndexController)
  .controller('userIndexController', userIndexController)
  .controller('userShowController', userShowController);
