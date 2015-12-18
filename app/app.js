var myApp = angular.module('myApp', [])
    .controller('MyCtrl', MyCtrl)
    .filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }]);


function MyCtrl($scope, $http) {
    $scope.formData;
    $scope.formType = "raw";
    $scope.result;
    $scope.processForm = function () {
        var data = {
            "inputs": {
                "input": $scope.formData,
                "inputType": $scope.formType
            },
            "highlighter": {}
        }

        $http.post('http://divaservices.unifr.ch/statistics/cmplst', data).
            success(function (response) {
                $scope.result = response.data
            });
    }
}