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
		$scope.checklists = [
			{
				title : 'Some pairs',
				list : [
					{title : 'min-max pair.', checked : false},
					{title : 'key-value pair.', checked : true}
				]
			},
			{
				title : 'Unnecessary dummy dummy dummy dummy dummy dummy dummy dummy dummy list',
				list : [
					{title : 'Very looooo oooooo ooooooo oooooooo ooooo oooooo oooooo ooooooo oooo oong clause', checked : false}
				]
			}
		];
		$scope.checkLineClass = function (checked) {
			return checked ? 'text-muted' : 'text-' + $scope.color;
		};
		$scope.checkLineIcon = function(checked) {
			return checked ? 'glyphicon-check' : 'glyphicon-unchecked';
		};
	});
})(angular.module('meow'));
