angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

$scope.quotes = dataService.getQuotes();

$scope.deleteMe = function(textToDelete){
  dataService.removeData(textToDelete);
}

// this
$scope.addQuote = function(newQuote){
  if(dataService.addData(newQuote))
  {
    $scope.newQuote = {}

  }
}

});
