'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])



    .controller('View1Ctrl', function ($scope, $http) {

        $scope.getData = function () {

            //alert("statecode")
            var statecode = document.getElementById("txt_state").value;
            var citycode = document.getElementById("txt_city").value;




            if (statecode != null && statecode != "" && citycode != null && citycode != "" ) {

                //This is the API that gives the fun fact based on the date and month.


                    var handler = $http.get("http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/" + statecode +"/"+ citycode +".json");


                    handler.success(function (data) {

                        if (data != null) {

                            var temp = data.current_observation.temp_f;
                            var feelslike = data.current_observation.feelslike_f;
                            var weather = data.current_observation.weather;

                            var outputtxt = "The temperature is " + temp + " degrees Farenheit " + "Feels Like " + feelslike + " degrees Farenheit and is " + weather;



                            //var headTxt = outputTxt.split(' ').slice(0, 2).join(' ');



                            document.getElementById("heading1").style.color = "Red";
                            document.getElementById("heading1").innerHTML = "Weather in " + citycode + ", " + statecode;
                            document.getElementById("outputtxt").style.background = "burlywood";
                            document.getElementById("outputtxt").innerHTML = outputtxt;

                        }

                    })

                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }



        }


    });
