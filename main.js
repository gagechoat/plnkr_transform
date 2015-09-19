angular
.module('improveDataBinding',[])
.controller('MainCtrl', ['$scope', 'dataInput', '$timeout', '$filter',
  function ($scope, dataInput, $timeout, $filter) {
    $scope.myData = {
      myGroups : [
        {
          myObjs : [
            {
              color: 'goldenrod',
              number : 'one'
            },
            {
              color: 'burlywood',
              number : 'two'
            },
            {
              color: 'rebeccapurple ',
              number : 'three'
            },
            {
              color: 'thistle',
              number : 'four'
            }
          ]
        }
      ]
    };
  }
]);