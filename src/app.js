import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'bulma';

import Router from './config/routes';
import Auth from './config/satellizer';

import MainCtrl from './controllers/main';
import FavoursIndexCtrl from './controllers/favours/index';
import FavoursShowCtrl from './controllers/favours/show';
import FavoursNewCtrl from './controllers/favours/new';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';

angular.module('favourAPI', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('FavoursIndexCtrl', FavoursIndexCtrl)
  .controller('FavoursShowCtrl', FavoursShowCtrl)
  .controller('FavoursNewCtrl', FavoursNewCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl);
