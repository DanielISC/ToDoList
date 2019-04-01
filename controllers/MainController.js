(function(){
    var app = angular.module("appModule");

    var MainController = function ($scope, lStorage) {
        $scope.title = "ToDoList";        
        $scope.list = false;
        $scope.activities = [];
        $scope.add = true

        var onList = function () {
            $scope.list = true;
            $scope.activities = lStorage.getList();
        }

        $scope.statusEdit = function (indexVal, status) {
            $scope.activities[indexVal].edit = status;
            $scope.changeStatus();
        }

        $scope.changeStatus = function () {
            lStorage.setChange($scope.activities);
        }

        $scope.create = function (activity) {
            if (activity !== '' && activity) {
                $scope.activities = lStorage.setActivity(activity);
            }
        }

        $scope.delete = function() {
            $scope.activities = $scope.activities.filter(function(activity){
              return !activity.completed
            })
            lStorage.setChange($scope.activities);
        };

        $scope.addActivity = function(activity) {
            $scope.add = (activity === '')? true : false
        };

        onList();
    }

    app.controller("MainController", MainController);
}());