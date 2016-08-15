/*
1.Two way data binding using the ng-model directive and one way data binding using the {{}} bindings (commonly called moustache brackets!).
2.Click event binding using the ng-click directive.
3.Dynamic CSS using the ng-class directive.
4.Iteration using the ng-repeat directive.
*/

/*Income Entries*/
var app = angular.module("myApp", [])
.controller("mainCtrl", function($scope){
	$scope.totalInc = 0;
	$scope.tasklist = [];
	$scope.task = {};
	$scope.totalleft = 0;
	$scope.addTask = function (){

		$scope.tasklist.push(angular.copy($scope.task));
		$scope.totalInc += $scope.task.amount1;
		$scope.totalleft += $scope.task.amount1;
	}

	$scope.tasklist2 = [];
	$scope.task2 = {};
	$scope.totalInc2 = 0;
	$scope.totalleft = 0;
	$scope.addTask2 = function (){
		$scope.tasklist2.pussh(angular.copy($scope.task2));
		$scope.totalInc2 += $scope.task2.amount2;
		$scope.totalleft -= $scope.task2.amount2;
	}

});
