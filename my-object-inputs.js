angular
.module('improveDataBinding')
.directive('myObjectInputs', function() {
  var controller = ['$scope', function ($scope) {
    $scope.transformedObjs = []
  }];
  
  return {
    restrict: 'E',
    replace: true,
    require: 'ngModel',
    templateUrl: 'my-object-inputs.html',
    controller: controller,
    scope: {
      ngModel: '='
    },
    link: function( $scope, element, attrs, ngModelCtrl ) {
      
      // transform to new data format
      ngModelCtrl.$formatters.push( function(modelValue) {
        var transformedData = [];
        
        for (var i=0; i<modelValue.length; i++) {
          var transformed;
          if (modelValue[i] == "zero") { transformed = 0 }
          else if (modelValue[i] == "one") { transformed = 1 }
          else if (modelValue[i] == "two") { transformed = 2 }
          else if (modelValue[i] == "three") { transformed = 3 }
          else if (modelValue[i] == "four") { transformed = 4 }
          else if (modelValue[i] == "five") { transformed = 5 }
          else if (modelValue[i] == "six") { transformed = 6 }
          else if (modelValue[i] == "seven") { transformed = 7 }
          else if (modelValue[i] == "eight") { transformed = 8 }
          else if (modelValue[i] == "nine") { transformed = 9 }
          if (transformed) {
            transformedData.push(transformed)
          }
        }
        
        return transformedData;
      });
      
      // transform back to original data format
      ngModelCtrl.$parsers.push( function(viewValue) {
        var untransformedData = [];
        
        for (var i=0; i<viewValue.length; i++) {
          if (viewValue[i] == 0) { untransformed = "zero" }
          else if (modelValue[i] == 1) { untransformed = "one" }
          else if (modelValue[i] == 2) { untransformed = "two" }
          else if (modelValue[i] == 3) { untransformed = "three" }
          else if (modelValue[i] == 4) { untransformed = "four" }
          else if (modelValue[i] == 5) { untransformed = "five" }
          else if (modelValue[i] == 6) { untransformed = "six" }
          else if (modelValue[i] == 7) { untransformed = "seven" }
          else if (modelValue[i] == 8) { untransformed = "eight" }
          else if (modelValue[i] == 9) { untransformed = "nine" }
        }
      
        return untransformedData;
      });
    
      // watch for updates to data
      $scope.$watch('transformedObjs', function() {
          ngModelCtrl.$setViewValue( angular.copy( $scope.transformedObjs ) );
      }, true);
      
      // update view
      ngModelCtrl.$render = function() {
          $scope.transformedObj = ngModelCtrl.$viewValue;
      };
    }
  }
});