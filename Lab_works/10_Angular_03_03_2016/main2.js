var app = angular.module('myApp',[]);
app.controller('myController', function($scope, myService){
$scope.myData = myService.getData();

	$scope.addValue = function() {
		$scope.myData.push({
			Name: $scope.Name,
			lastName: $scope.lastName
		});
		$scope.newValue = '';
	}

	// $scope.sort = function() {
	// 	$scope.myData.sort({

	// 	});
	// }
		
	

	});
	

app.service('myService', function() {
	return {
		getData: function() {
			return [{Name: 'John', lastName: 'Smith'}, {Name: 'Mike', lastName: 'Bond'}, {Name: 'Bob', lastName: 'Stallone'} ];
		}
	}
});
