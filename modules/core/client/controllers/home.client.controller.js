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

    var currIndex = 0;
    $scope.slides = [
      {
        image: 'modules/core/client/img/insuTypes/life-insurance-banner-1.png',
        id: currIndex++
      },
      {
        image: 'modules/core/client/img/insuTypes/healthInsu.jpg',
        id: currIndex++
      },
      {
        image: 'modules/core/client/img/insuTypes/lifInsuImgBan.jpg',
        id: currIndex++
      }
    ];

    $scope.age = '';

    $scope.step = -1;

    $scope.getInsuForm = getInsuForm;
    $scope.goBack = goBack;
    $scope.selectInsuType = selectInsuType;
    $scope.selectInsuFor = selectInsuFor;
    $scope.validateEmail = validateEmail;
    $scope.selectGender = selectGender;

    $scope.medInsuPlans = [
      {
        planName: "Med Plus",
        sumInsured: "50 L",
        hospitalRoomEligibility: "Upto 3K/Day",
        AmbulanceCharges: "1.5K/event",
        BonusOnClaim: "1.8 Lacs SI added/year",
        type: "Individual",
        premium: "Rs 15000/Year"
      },
      {
        planName : "Med Gold",
        sumInsured : "75 L",
        hospitalRoomEligibility : "Upto 5K/Day",
        AmbulanceCharges :"2K/event",
        BonusOnClaim :"2.5 Lacs SI added/year",
        type: "Individual",
        premium:"Rs 25,000/Year"
      },
      {
        planName : "Med Diamond",
        sumInsured : "1 Cr",
        hospitalRoomEligibility : "Upto 7K/Day",
        AmbulanceCharges :"2K/event",
        BonusOnClaim :"5 Lacs SI added/year",
        type: "Individual",
        premium: "Rs 30,000/Year"
      },
      {
        planName : "Med Family Plus",
        sumInsured : "50 L",
        hospitalRoomEligibility : "Upto 3K/Day",
        AmbulanceCharges : "1.5K/event",
        BonusOnClaim: "1.8 Lacs SI added/year",
        type: "Family",
        premium:"Rs 18,000/Year"
      },
      {
        planName : "Med Family Gold",
        sumInsured : "75 L",
        hospitalRoomEligibility : "Upto 5K/Day",
        AmbulanceCharges :"2K/event",
        BonusOnClaim :"2.5 Lacs SI added/year",
        type:"Family",
        premium : "Rs 28,000/Year"
      },
      {
        planName : "Med Family Diamond",
        sumInsured : "1 Cr",
        hospitalRoomEligibility : "Upto 7K/Day",
        AmbulanceCharges :"2K/event",
        BonusOnClaim :"5 Lacs SI added/year",
        type : "Family",
        premium: "Rs 35,000/Year"
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

    function selectGender(gender) {
      console.log(gender);
      $scope.genderSelected = gender;
    }

    $scope.additem = 1;
    setInterval(function(){
      console.log($scope.additem);
      if($scope.additem == 4) {
        $scope.additem = 1;
      } else {
        $scope.additem = $scope.additem + 1;
      }
      $scope.$apply();
    }, 3000)
  }
}());
