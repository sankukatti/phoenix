(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];
  function HomeController($scope) {
    $scope.insuranceTypes = [
      {
        name: 'Medical Insurance',
        img: 'modules/core/client/img/insuTypes/medInsuType.jpg'
      },
      {
        name: 'Life insurance',
        img: 'modules/core/client/img/insuTypes/lifeInsuType.jpg'
      }];
    $scope.insuSelected = $scope.insuranceTypes[0];

    $scope.insuranceForList = [
      {
        name: 'Me',
        img: 'modules/core/client/img/insuTypes/single.jpg'
      },
      {
        name: 'Me and Family',
        img: 'modules/core/client/img/insuTypes/family.png'
      }
    ];
    $scope.insuFor = $scope.insuranceForList[0];

    $scope.age = '';

    $scope.step = 0;

    $scope.getInsuForm = getInsuForm;
    $scope.goBack = goBack;
    $scope.selectInsuType = selectInsuType;


    $scope.medInsuPlans = [1, 2];
    $scope.lifeInsuPlans = [];

    function getInsuForm(step) {
      $scope.step = Number(step);
    }

    function goBack() {
      $scope.step = $scope.step - 1;
    }

    function selectInsuType(insuType) {
      $scope.insuSelected = insuType
    }
  }
}());
