import angular from 'angular';
import '@uirouter/angularjs';

import Router from './config/routes';

// import MainCtrl from './controllers/main';
import favourIndexController from './controllers/favours/index';

angular.module('favourAPI', ['ui.router'])
  .config(Router)
  .controller('favourIndexController', favourIndexController);
