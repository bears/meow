(function (app) {
	"use strict";

	app.controller('FlowCtrl', function ($scope, $routeParams) {
		$scope.id = $routeParams.flow;
		$scope.colorOptions = ['default', 'danger', 'warning', 'success', 'info', 'primary'];
		$scope.color = 'danger';
		$scope.changeColor = function (color) {
			$scope.color = color;
		};
		$scope.title = 'こんな何气ない一日新';
	});
})(angular.module('meow'));
