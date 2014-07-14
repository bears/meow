(function (app) {
	"use strict";

	app.config(function ($routeProvider) {
		$routeProvider.otherwise({redirectTo : '/subject'})
			.when('/account', {
				templateUrl : 'account.html',
				controller : 'AccountCtrl'
			})
			.when('/setting', {
				templateUrl : 'setting.html',
				controller : 'SettingCtrl'
			})
			.when('/subject', {
				templateUrl : 'main.html',
				controller : 'MainCtrl'
			})
			.when('/subject/:subject', {
				templateUrl : 'subject.html',
				controller : 'SubjectCtrl'
			})
			.when('/subject/:subject/:fragment', {
				templateUrl : 'flow.html',
				controller : 'FlowCtrl'
			});
	});
})(angular.module('meow', ['ngRoute']));
