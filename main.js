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
  }
]);