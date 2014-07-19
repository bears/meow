(function (app) {
	"use strict";

	app.controller('SubjectListCtrl', function ($scope, $routeParams) {
		$scope.createSubject = function (name) {
			alert('todo: create ' + name);
		};

		$scope.list = [
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
			},
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
			},
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
			},
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
		];
	});
})(angular.module('meow'));
