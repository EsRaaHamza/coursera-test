(function () {
    'use strict';

    var app = angular.module('ModuleOneSoln', []);

    // app.controller('ModuleOneController', ['$scope',ModuleOneController]); //if I have more than one service , OTHER than $scope then add it as a parameter .. METHODE 1 
    app.controller('ModuleOneController', ModuleOneController); //METHODE 2
    ModuleOneController.$inject = ['$scope']; //to prevent minifications

    function ModuleOneController($scope) {

        $scope.foodItems;
        $scope.outputMessage;
        $scope.mySplit = function (foodItems) {
            //console.log(foodItems.length);
            if (foodItems == null) {
                $scope.outputMessage = "ENTER VALUE FIRST !! ";
                $scope.textColor = {
                    "color": "red"
                }
                $scope.borderColor = {
                    "border-color": "red"
                }
                return;
            }
            if (foodItems.length == 0) {    //handeling the case when typing then earsing the textbox value
                $scope.outputMessage = "ENTER VALUE FIRST !! ";
                $scope.textColor = {
                    "color": "red"
                }
                $scope.borderColor = {
                    "border-color": "red"
                }
                return;
            }
            var splittedStringArr = foodItems.split(","); // array of lunch items 
            //console.log(splittedStringArr.length);

            //Looping for each item of any array to check whethere there is an empty item , if there is  empty items count them ..  
            var noOfEmptyItems = 0;
            for (var i = 0; i < splittedStringArr.length; i++) {

               if (splittedStringArr[i] == null || splittedStringArr[i].length == 0 )
               {
                   noOfEmptyItems++;
                   console.log("CONDITION 1 : "+splittedStringArr[i]);            
                   console.log("CONDITION 2 : "+splittedStringArr[i].length);            

               }
               if (splittedStringArr[i] == " " && splittedStringArr[i].length == 1 )
               {
                   noOfEmptyItems++;
                   console.log("CONDITION 1- dash  : "+splittedStringArr[i]);            
                   console.log("CONDITION 2- dash : "+splittedStringArr[i].length);            

               }
            }
            console.log("ArrLENGTH : "+splittedStringArr.length);            
            console.log("noOfEmptyItems : "+noOfEmptyItems);
            console.log("SUBSTRACTION: "+splittedStringArr.length-noOfEmptyItems);

            if (splittedStringArr.length-noOfEmptyItems   <= 3) {
                $scope.outputMessage = "ENJOY! :) ";
                $scope.textColor = {
                    "color": "green"
                }
                $scope.borderColor = {
                    "border-color": "green"
                }

            }
            else {
                $scope.outputMessage = "TOO MUCH :( ";
                $scope.textColor = {
                    "color": "green"
                }
                $scope.borderColor = {
                    "border-color": "green"
                }
            }



        }


    }
})();
