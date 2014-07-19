(function (app) {
	"use strict";

	app.config(function ($routeProvider) {
		$routeProvider.otherwise({redirectTo : '/subjects'})
			.when('/account', {
				templateUrl : 'account.html',
				controller : 'AccountCtrl'
			})
			.when('/setting', {
				templateUrl : 'setting.html',
				controller : 'SettingCtrl'
			})
			.when('/subjects', {
				templateUrl : 'main.html',
				controller : 'MainCtrl'
			})
			.when('/subject/:subject', {
				templateUrl : 'subject.html',
				controller : 'SubjectCtrl'
			})
			.when('/flow/:flow', {
				templateUrl : 'flow.html',
				controller : 'FlowCtrl'
			});
	});
})(angular.module('meow', ['ngRoute']));
