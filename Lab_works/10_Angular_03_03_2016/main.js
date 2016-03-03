var app = angular.module('myApp',[]);
app.controller('myController', function($scope, myService){
$scope.myData = myService.getData();

	$scope.addValue = function() {
		$scope.myData.push($scope.newValue);
		$scope.newValue = '';
	}

	});

app.service('myService', function() {
	return {
		getData: function() {
			return [1,2,3,4,5,6,7,8,9,10];
		}
	}
});
