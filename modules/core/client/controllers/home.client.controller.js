(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$window'];
  function HomeController($scope, $window) {
    $scope.insuranceTypes = [
      {
        name: 'Medical Insurance',
        img: 'modules/core/client/img/insuTypes/medInsuType.png',
        desc: 'Forget paying doctor fees.'
      },
      {
        name: 'Life insurance',
        img: 'modules/core/client/img/insuTypes/lifeInsuType.png',
        desc: 'Forget worrying about family.'
      }];

    $scope.insuranceForList = [
      {
        name: 'Me',
        img: 'modules/core/client/img/insuTypes/single.png'
      },
      {
        name: 'Me and Family',
        img: 'modules/core/client/img/insuTypes/family.png'
      }
    ];

    $scope.age = '';

    $scope.step = 0;

    $scope.getInsuForm = getInsuForm;
    $scope.goBack = goBack;
    $scope.selectInsuType = selectInsuType;
    $scope.selectInsuFor = selectInsuFor;
    $scope.validateEmail = validateEmail;

    $scope.medInsuPlans = [
      {
        "planName" : "Med Plus",
        "sumInsured" : "50 Lakh",
        "hospitalRoomEligibility" : "Upto 3K/Day",
        "AmbulanceCharges":"1.5K/event",
        "BonusOnClaim":"1.8 Lacs SI added/year"
      },
      {
        "planName" : "Med Plus",
        "sumInsured" : "50 Lakh",
        "hospitalRoomEligibility" : "Upto 3K/Day",
        "AmbulanceCharges":"1.5K/event",
        "BonusOnClaim":"1.8 Lacs SI added/year"
      }

    ];
    $scope.lifeInsuPlans = [
      {
        planName : 'Life Gold',
        sumInsured : '1Cr',
        facilities : [
          'Waiver of Premium on Accident Disability',
          'Additional Payout in case of death due to accident'
        ],
        premium: '20,000/year'
      },
      {
        planName : 'Life Diamond',
        sumInsured : '1Cr',
        facilities : [
          'Waiver of Premium on Accident Disability',
          'Additional Payout in case of death due to accident',
          'Cover against 19 Critical Illnesses'
        ],
        premium: '25,000/year'
      },
      {
        planName : 'Life Platinum',
        sumInsured : '1Cr',
        facilities : [
          'Waiver of Premium on Accident Disability',
          'Additional Payout in case of death due to accident',
          'Cover against 19 Critical Illnesses',
          'Cover against accidental permanent disability for 35'
        ],
        premium: '30,000/year'
      }
    ];

    function getInsuForm(step) {
      $scope.step = Number(step);
    }

    function goBack() {
      $scope.step = $scope.step - 1;
    }

    function selectInsuType(insuType) {
      $scope.insuSelected = insuType
    }

    function selectInsuFor(insuFor) {
      $scope.insuFor = insuFor
      $window.scrollTo(10, 500);
    }

    function validateEmail() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test($scope.email);
    }
  }
}());
