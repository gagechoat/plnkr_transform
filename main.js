var myApp = angular.module('myApp',[]);

angular.module('myApp').controller('MainCtrl', ['$scope', '$filter',
  function ($scope, $filter) {
    $scope.myData = {
      myGroups : [
        {
          myGroupName: 'First',
          myObjs : [
            {
              order: 0,
              number : 'one'
            },
            {
              order: 0,
              number : 'two'
            },
            {
              order: 1,
              number : 'three'
            },
            {
              order: 1,
              number : 'four'
            }
          ]
        },
        {
          myGroupName: 'Second',
          myObjs : [
            {
              order: 0,
              number : 'five'
            },
            {
              order: 0,
              number : 'six'
            },
            {
              order: 1,
              number : 'seven'
            },
            {
              order: 1,
              number : 'eight'
            }
          ]
        },
        {
          myGroupName: 'Third',
          myObjs : [
            {
              order: 0,
              number : 'nine'
            },
            {
              order: 0,
              number : 'nine'
            },
            {
              order: 1,
              number : 'nine'
            },
            {
              order: 1,
              number : 'nine'
            }
          ]
        }
      ]
    };

    $scope.reorder = function() {
      // gather all numbers
      var numbersArr = [];
      for ( var i = 0; i < $scope.myData.myGroups.length; i++ ) {
        for ( var j = 0; j < $scope.myData.myGroups[i].myObjs.length; j++ ) {
          numbersArr.push( $scope.myData.myGroups[i].myObjs[j].number );
        }
      }
      
      // shuffle list of all numbers
      numbersArr = numbersArr.sort(function() { return 0.5 - Math.random() });

      // assign shuffled numbers to original data
      var k = 0;
      for ( var i = 0; i < $scope.myData.myGroups.length; i++ ) {
        for ( var j = 0; j < $scope.myData.myGroups[i].myObjs.length; j++ ) {
          $scope.myData.myGroups[i].myObjs[j].number = numbersArr[k++];
        }
      }
    }

    // $scope.duplicateGroup = function( group ) {
    //   $scope.myData.myGroups.push( angular.copy( group ) );
    //   $scope.myData.myGroups[$scope.myData.myGroups.length-1].myObjs = angular.copy(group.myObjs);

    //   //console.log( 'duplicateSection: section = ' ); console.dir( section );
    //   //console.log( 'duplicateSection: newSection = ' ); console.dir( newSection );
    // };

    // $scope.removeGroup = function( group ) {
    //   //console.log('removeSection (before): section = '); console.dir(section);
    //   if ( $scope.myData.myGroups.length > 1 ) {
    //     var index = $scope.myData.myGroups.indexOf( group );
    //     $scope.myData.myGroups.splice(index, 1);
    //   }
    //   //console.log('removeSection (after): section = '); console.dir(section);
    // };
  }
]);