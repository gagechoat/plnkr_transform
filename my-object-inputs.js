myApp.directive('myObjectInputs', function() {
  return {
    restrict: 'E',
    require: 'ngModel',
    templateUrl: 'my-object-inputs.html',
    scope: {
      model: '=ngModel'
    },
    link: function( $scope, element, attrs, ngModelCtrl ) {
      // remove numbers from this item
      $scope.reset = function(arr) {
        var index = $scope.transformedObjs.indexOf( arr );
        for (var i = 0; i < $scope.transformedObjs[index].length; i++ ) {
          $scope.transformedObjs[index][i].number = 1;
        }

      };

      var transform = function(modelValue) {
        var transformedData = [[],[]];

        for (var i=0; i<modelValue.length; i++) {
          var transformed;
          if (modelValue[i].number == "zero") { transformed = 0 }
          else if (modelValue[i].number == "one") { transformed = 1 }
          else if (modelValue[i].number == "two") { transformed = 2 }
          else if (modelValue[i].number == "three") { transformed = 3 }
          else if (modelValue[i].number == "four") { transformed = 4 }
          else if (modelValue[i].number == "five") { transformed = 5 }
          else if (modelValue[i].number == "six") { transformed = 6 }
          else if (modelValue[i].number == "seven") { transformed = 7 }
          else if (modelValue[i].number == "eight") { transformed = 8 }
          else if (modelValue[i].number == "nine") { transformed = 9 }
          if (transformed) {
            transformedData[ modelValue[i].order ].push({
              order: modelValue[i].order,
              number: transformed
            });
          }
        }

        return transformedData;
      }

      var untransform = function (viewValue) {
        var untransformedData = [];

        for (var i=0; i<viewValue.length; i++) {
          for (var j=0; j<viewValue[i].length; j++) {
            var untransformed;
            if (viewValue[i][j].number === 0) { untransformed = "zero" }
            else if (viewValue[i][j].number == 1) { untransformed = "one" }
            else if (viewValue[i][j].number == 2) { untransformed = "two" }
            else if (viewValue[i][j].number == 3) { untransformed = "three" }
            else if (viewValue[i][j].number == 4) { untransformed = "four" }
            else if (viewValue[i][j].number == 5) { untransformed = "five" }
            else if (viewValue[i][j].number == 6) { untransformed = "six" }
            else if (viewValue[i][j].number == 7) { untransformed = "seven" }
            else if (viewValue[i][j].number == 8) { untransformed = "eight" }
            else if (viewValue[i][j].number == 9) { untransformed = "nine" }
            if (untransformed) {
              untransformedData.push({
                order: viewValue[i][j].order,
                number: untransformed
              });
            }
          }
        }

        return untransformedData; 
      }

      // watch for updates on parent to data
      $scope.$watch('model', function() {
        $scope.transformedObjs = angular.copy(transform($scope.model));
      }, true);

      // watch for updates on directive to data
      $scope.$watch('transformedObjs', function() {
        $scope.model = angular.copy(untransform($scope.transformedObjs));
      }, true);
    }
  }
});