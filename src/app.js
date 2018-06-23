import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';

import Router from './config/routes';

import MainCtrl from './controllers/main';
import favourIndexController from './controllers/favours/index';
import AuthRegisterCtrl from './controllers/auth/register';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';

angular.module('favourAPI', ['ui.router'])
  .config(Router)
  .controller('MainCtrl', MainCtrl)
  .controller('favourIndexController', favourIndexController)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl);
