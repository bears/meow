(function (app) {
	"use strict";

	app.config(function ($routeProvider) {
		$routeProvider.otherwise({redirectTo : '/subjects'})
			.when('/account', {
				templateUrl : 'account.html',
				controller : 'AccountCtrl'
			})
			.when('/help', {
				templateUrl : 'help.html',
				controller : 'HelpCtrl'
			})
			.when('/archives', {
				templateUrl : 'archives.html',
				controller : 'ArchiveListCtrl'
			})
			.when('/messages', {
				templateUrl : 'messages.html',
				controller : 'MessageListCtrl'
			})
			.when('/subjects', {
				templateUrl : 'subjects.html',
				controller : 'SubjectListCtrl'
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
