var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',function($scope){
   var validX = false;
   var validY = false;
   var counter = 0;
   $scope.solveKinematics = function(){
       while(!validX){
           if($scope.ivx != undefined && $scope.fvx != undefined && $scope.ax != undefined && $scope.ix != undefined && $scope.fx != undefined){
               console.log("valid x");
               validX = true;
               counter = 0;
           }
           else{
               counter++;
               if(counter > 5){
                    $scope.validInput = "INVALID INPUT::Not Enough information, remember to put 0 where appropriate";
                    validX = true;
               }
           }
           //Run though first kinematic equation solved for each variable.
           if($scope.fvx == undefined && $scope.ivx != undefined && $scope.ax != undefined && $scope.tt != undefined){
               console.log("1");
               $scope.fvx = +$scope.ivx + (+$scope.ax * +$scope.tt);
           }
           if($scope.ivx == undefined && $scope.fvx != undefined && $scope.ax != undefined && $scope.tt != undefined){
               console.log("2");
               $scope.ivx = +$scope.fvx - (+$scope.ax * +$scope.tt);
           }
           if($scope.ax == undefined && $scope.fvx != undefined && $scope.ivx != undefined && $scope.tt != undefined){
               console.log("3");
               $scope.ax = (+$scope.fvx - +$scope.ivx)/+$scope.tt;
           }
           if($scope.tt == undefined && $scope.ivx != undefined && $scope.fvx != undefined && $scope.ax != undefined){
               console.log("4");
               $scope.tt = (+$scope.fvx - +$scope.ivx)/+$scope.ax;
           }
           
           //Run through second kinematic equation solved for each variable, except t because screw quadratic equations
           if($scope.fx == undefined && $scope.ix != undefined && $scope.ax != undefined && $scope.tt != undefined && $scope.ivx != undefined){
               console.log("5");
               $scope.fx = +$scope.ix + (+$scope.ivx * +$scope.tt) + (.5 * +$scope.ax * (+$scope.tt * +$scope.tt));
           }
           if($scope.ix == undefined && $scope.fx != undefined && $scope.ax != undefined && $scope.tt != undefined && $scope.ivx != undefined){
               console.log("6");
               $scope.ix = +$scope.fx - (+$scope.ivx * +$scope.tt) - (.5 * +$scope.ax * (+$scope.tt * +$scope.tt));
           }
           if($scope.ivx == undefined && $scope.ix != undefined && $scope.ax != undefined && $scope.tt != undefined && $scope.fx != undefined){
               console.log("7");
               $scope.ivx = (+$scope.fx - +$scope.ix - (.5 * +$scope.ax * (+$scope.tt * +$scope.tt)))/+$scope.tt;
           }
           if($scope.ax == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.tt != undefined && $scope.ivx != undefined){
               console.log("8");
               $scope.ax = (+$scope.fx - +$scope.ix - (+$scope.ivx * +$scope.tt))/(+$scope.tt * +$scope.tt);
           }
           
           //Run through third kinematic equation solved for each variable except fx and ix
           if($scope.tt == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.ivx != undefined && $scope.fvx != undefined){
               console.log("9");
               $scope.tt = (+$scope.fx - +$scope.ix)/((+$scope.fvx + +$scope.ivx)/2);
           }
           if($scope.fvx == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.ivx != undefined && $scope.tt != undefined){
               console.log("10");
               $scope.fvx = (2 * (+$scope.fx - +$scope.ix)/+$scope.tt) - +$scope.ivx;
           }
           if($scope.ivx == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.tt != undefined && $scope.fvx != undefined){
               console.log("11");
               $scope.ivx = (2 * (+$scope.fx - +$scope.ix)/+$scope.tt) - +$scope.fvx;
           }
           
           //Run through the fourth kinematic equation solved for each variable except fx and ix
           if($scope.fvx == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.ivx != undefined && $scope.ax != undefined){
               console.log("12");
               $scope.fvx = Math.sqrt((+$scope.ivx * +$scope.ivx) - (2 * +$scope.ax * (+$scope.fx - +$scope.ix)));
           }
           if($scope.ivx == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.ax != undefined && $scope.fvx != undefined){
               console.log("13");
               $scope.ivx = Math.sqrt((+$scope.fvx * +$scope.fvx) + (2 * +$scope.ax * (+$scope.fx - +$scope.ix)));
           }
           if($scope.ax == undefined && $scope.ix != undefined && $scope.fx != undefined && $scope.ivx != undefined && $scope.fvx != undefined){
               console.log("14");
               $scope.ax = ((+$scope.ivx * +$scope.ivx) - (+$scope.fvx * +$scope.fvx))/(2 * (+$scope.fx - +$scope.ix));
           }
       }
       while(!validY){
           if($scope.ivy != undefined && $scope.fvy != undefined && $scope.ay != undefined && $scope.iy != undefined && $scope.fy != undefined){
               console.log("valid y");
               validY = true;
               counter = 0;
           }
           else{
               counter++;
               if(counter > 5){
                    $scope.validInput = "INVALID INPUT::Not Enough information, remember to put 0 where appropriate";
                    validY = true;
               }
           }
           
           //Run though first kinematic equation solved for each variable.
           if($scope.fvy == undefined && $scope.ivy != undefined && $scope.ay != undefined && $scope.tt != undefined){
               console.log("1");
               $scope.fvy = +$scope.ivy + (+$scope.ay * +$scope.tt);
           }
           if($scope.ivy == undefined && $scope.fvy != undefined && $scope.ay != undefined && $scope.tt != undefined){
               console.log("2");
               $scope.ivy = +$scope.fvy - (+$scope.ay * +$scope.tt);
           }
           if($scope.ay == undefined && $scope.fvy != undefined && $scope.ivy != undefined && $scope.tt != undefined){
               console.log("3");
               $scope.ay = (+$scope.fvy - +$scope.ivy)/+$scope.tt;
           }
           if($scope.tt == undefined && $scope.ivy != undefined && $scope.fvy != undefined && $scope.ay != undefined){
               console.log("4");
               $scope.tt = (+$scope.fvy - +$scope.ivy)/+$scope.ay;
           }
           
           //Run through second kinematic equation solved for each variable, except t because screw quadratic equations
           if($scope.fy == undefined && $scope.iy != undefined && $scope.ay != undefined && $scope.tt != undefined && $scope.ivy != undefined){
               console.log("5");
               $scope.fy = +$scope.iy + (+$scope.ivy * +$scope.tt) + (.5 * +$scope.ay * (+$scope.tt * +$scope.tt));
           }
           if($scope.iy == undefined && $scope.fy != undefined && $scope.ay != undefined && $scope.tt != undefined && $scope.ivy != undefined){
               console.log("6");
               $scope.iy = +$scope.fy - (+$scope.ivy * +$scope.tt) - (.5 * +$scope.ay * (+$scope.tt * +$scope.tt));
           }
           if($scope.ivy == undefined && $scope.iy != undefined && $scope.ay != undefined && $scope.tt != undefined && $scope.fy != undefined){
               console.log("7");
               $scope.ivy = (+$scope.fy - +$scope.iy - (.5 * +$scope.ay * (+$scope.tt * +$scope.tt)))/+$scope.tt;
           }
           if($scope.ay == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.tt != undefined && $scope.ivy != undefined){
               console.log("8");
               $scope.ay = (+$scope.fy - +$scope.iy - (+$scope.ivy * +$scope.tt))/(+$scope.tt * +$scope.tt);
           }
           
           //Run through third kinematic equation solved for each variable except fx and ix
           if($scope.tt == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.ivy != undefined && $scope.fvy != undefined){
               console.log("9");
               $scope.tt = (+$scope.fy - +$scope.iy)/((+$scope.fvy + +$scope.ivy)/2);
           }
           if($scope.fvy == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.ivy != undefined && $scope.tt != undefined){
               console.log("10");
               $scope.fvy = (2 * (+$scope.fy - +$scope.iy)/+$scope.tt) - +$scope.ivy;
           }
           if($scope.ivy == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.tt != undefined && $scope.fvy != undefined){
               console.log("11");
               $scope.ivy = (2 * (+$scope.fy - +$scope.iy)/+$scope.tt) - +$scope.fvy;
           }
           
           //Run through the fourth kinematic equation solved for each variable except fx and ix
           if($scope.fvy == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.ivy != undefined && $scope.ay != undefined){
               console.log("12");
               $scope.fvy = Math.sqrt((+$scope.ivy * +$scope.ivy) - (2 * +$scope.ay * (+$scope.fy - +$scope.iy)));
           }
           if($scope.ivy == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.ay != undefined && $scope.fvy != undefined){
               console.log("13");
               $scope.ivy = Math.sqrt((+$scope.fvy * +$scope.fvy) + (2 * +$scope.ay * (+$scope.fy - +$scope.iy)));
           }
           if($scope.ay == undefined && $scope.iy != undefined && $scope.fy != undefined && $scope.ivy != undefined && $scope.fvy != undefined){
               console.log("14");
               $scope.ay = ((+$scope.ivy * +$scope.ivy) - (+$scope.fvy * +$scope.fvy))/(2 * (+$scope.fy - +$scope.iy));
           }
       }
       validX = false;
       validY = false;
   };
});