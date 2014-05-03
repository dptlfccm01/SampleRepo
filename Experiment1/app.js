var main = angular.module('mainModule', []);

main.controller('mainController', function($scope, $window){
	$scope.title = "Title placement here";
	
	$scope.itemId = 0;
	
	
	// these array items are used for the entries to the HTML5 data list
	$scope.items = [{"name":"Milk"},{"name":"Egg"},{"name":"Salt"},{"name":"Pepper"},{"name":"Lamb"}];
	
	
	$scope.list = [{"name":"milk",
					"done":false,
					"id": $scope.itemId+=1},
					{"name":"cheese",
					"done":false,
					"id": $scope.itemId+=1},
					{"name":"bread",
					"done":false,
					"id": $scope.itemId+=1}]
						
	$scope.addItem = function(){
		$scope.list.push({name:$scope.itemNameValue, done:false, id:$scope.itemId+=1});
	}
	
	
	
	//function for removing an item
	$scope.removeItem = function(index){
		 $scope.list.splice(index, 1);
	}
	
	$scope.editItem = function(index){
		var obj = $scope.list[index]; //get the selected index of the list array when the 'edit' link is clicked
		window.alert("Name: "+obj.name+"\n\nTicked?:"+obj.done); //view the data: name and ticked state.
	}
	
	
	//used to update the existing entries (at the moment with a sample value 'soosie'
	$scope.updateItem = function(index){
		$scope.list[index].name = "Soosie";
	}
	
	
});