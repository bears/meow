(function (app) {
	"use strict";

	app.controller('SubjectCtrl', function ($scope, $routeParams) {
		$scope.newTitle = $scope.title = "こんな何气ない一日新";
		$scope.changeTitle = function () {
			$scope.title = $scope.newTitle;
			$scope.isEditingTitle = false;
		};
		$scope.titleBtnCls = function () {
			return $scope.newTitle === $scope.title ? 'btn-default' : 'btn-success';
		};
		$scope.titleIcoCls = function () {
			return $scope.newTitle === $scope.title ? 'glyphicon-remove' : 'glyphicon-ok';
		};
		$scope.list = [
			{
				color : "default",
				title : "To do",
				flows : [
					{
						id : "xxxx",
						color : "default",
						title : "この物语の续きこれからペ一ジ埋めようたくさんの奇迹が待ってる"
					},
					{
						id : "xxxx",
						color : "default",
						title : "こんな何气ない一日新しいメロディ一を口ずさんでみるんだ今日もお日样に照らされて　生きてゆける"
					},
					{
						id : "xxxx",
						color : "default",
						title : "それだけでも"
					}
				]
			},
			{
				color : "info",
				title : "Doing",
				flows : [
					{
						id : "xxxx",
						color : "info",
						title : "喜びを味わえる目にするすべてに"
					},
					{
						id : "xxxx",
						color : "info",
						title : "ありがとう生きてゆこう"
					},
					{
						id : "xxxx",
						color : "info",
						title : "每日新しい"
					},
					{
						id : "xxxx",
						color : "success",
						title : "歌を见つけながら"
					},
					{
						id : "xxxx",
						color : "info",
						title : "喜びを味わえる目にするすべてに"
					},
					{
						id : "xxxx",
						color : "info",
						title : "ありがとう生きてゆこう"
					},
					{
						id : "xxxx",
						color : "info",
						title : "每日新しい"
					},
					{
						id : "xxxx",
						color : "success",
						title : "歌を见つけながら"
					}
				]
			},
			{
				color : "success",
				title : "Done",
				flows : [
					{
						id : "xxxx",
						color : "success",
						title : "まあるい鞄を持ってヘッドフォ一ンはリンゴで少しお腹がすいたら"
					},
					{
						id : "xxxx",
						color : "success",
						title : "ミルフィ一ユはいちごで少しさみしい气分も　忘れさせてくれるの今日もお日样に　照らされて　生きてゆける"
					},
					{
						id : "xxxx",
						color : "warning",
						title : "次から次へと　目の前のハ一ドルをのりこえるたび　强くなる　生きてゆこう每日新しい　私を见つけながら"
					}
				]
			},
			{
				color : "warning",
				title : "Ignored",
				flows : [
					{
						id : "xxxx",
						color : "warning",
						title : "优しい友达　一息のコ一ヒ一タイムほっとする时间も大事ね……"
					},
					{
						id : "xxxx",
						color : "warning",
						title : "自分のペ一スで步きだせばオリジナルの宝物见つかるこの物语の续き　君と出会って　变わってく"
					},
					{
						id : "xxxx",
						color : "danger",
						title : "ひらめき　思いつき　ラクガキどんなアイディアも欢迎仆の知らないことをね　そうたくさん教えて"
					},
					{
						id : "xxxx",
						color : "danger",
						title : "今日もお日样に照らされて"
					}
				]
			},
			{
				color : "danger",
				title : "Unknown",
				flows : [
					{
						id : "xxxx",
						color : "danger",
						title : "生きてゆけるそれだけでも"
					},
					{
						id : "xxxx",
						color : "primary",
						title : "喜びを味わえる目にするすべてに"
					},
					{
						id : "xxxx",
						color : "primary",
						title : "ありがとう"
					},
					{
						id : "xxxx",
						color : "primary",
						title : "生きてゆこう　每日新しい　歌を见つけながら出会う人みんなに　ありがとう生きてゆこう　每日新しい　世界见つけながら"
					}
				]
			}
		];
	});
})(angular.module('meow'));
