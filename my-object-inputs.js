myApp.directive('myObjectInputs', function() {
  var controller = ['$scope', function ($scope) {
    $scope.transformedObjs = [];

    $scope.showTransformedObjs = function() {
      console.log('transformedObjs = ');console.dir($scope.transformedObjs);
    };

    // // add more numbers to this item
    // $scope.more = function() {
    //   for ( var i = 0; i < $scope.transformedObjs.length; i++ ) {
    //     $scope.transformedObjs[i].push({
    //       order: i,
    //       number: 0
    //     })
    //   }
    // };

    // // remove numbers from this item
    // $scope.less = function() {
    //   // for ( var i = 0; i < $scope.transformedObjs.length; i++ ) {
    //   //   $scope.transformedObjs[i].pop();
    //   // }
    //   if ( $scope.transformedObjs.length > 1 ) {
    //     var index = $scope.barData.indexOf( bar );
    //     $scope.barData.splice(index, 1);
    //   }
    // };

    // $scope.removeBar = function( bar ) {
    //     //console.log('removeBar: barData length = ' + $scope.barData.length + ', indexOf bar = ' + $scope.barData.indexOf( bar ) + ', barData (before) = '); console.dir($scope.barData);
    //     if ( $scope.barData.length > 1 ) {
    //         var index = $scope.barData.indexOf( bar );
    //         $scope.barData.splice(index, 1);
    //     } else {
    //         $scope.barData = [[
    //             {
    //                 'chord':''
    //             },
    //             {
    //                 'chord':''
    //             },
    //             {
    //                 'chord':''
    //             },
    //             {
    //                 'chord':''
    //             }
    //         ]];
    //     }
    //     //console.log('removeBar: barData (after) = '); console.dir($scope.barData);
    // };

    // remove numbers from this item
    $scope.reset = function(arr) {
      var index = $scope.transformedObjs.indexOf( arr );
      for (var i = 0; i < $scope.transformedObjs[index].length; i++ ) {
        $scope.transformedObjs[index][i].number = 0;
      }
    };
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
      });
      
      // transform back to original data format
      ngModelCtrl.$parsers.push( function(viewValue) {
        var untransformedData = [];
        
        for (var i=0; i<viewValue.length; i++) {
          for (var j=0; j<viewValue[i].length; j++) {
            var untransformed;
            if (viewValue[i][j].number == 0) { untransformed = "zero" }
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
              })
            }
          }
        }
      
        return untransformedData;
      });
    
      // watch for updates to data
      $scope.$watch('transformedObjs', function() {
        ngModelCtrl.$setViewValue( angular.copy( $scope.transformedObjs ) );
      }, true);
      
      // update view
      ngModelCtrl.$render = function() {
        $scope.transformedObjs = ngModelCtrl.$viewValue;
      };
    }
  }
});