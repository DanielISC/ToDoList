(function(){
    var app = angular.module("appModule");

    var lStorage = function () {
       var getList = function () {
           list = []
            if(checkStorage()) {
                list = JSON.parse(localStorage.getItem("list"));
            }
            return list;
        };

        var setChange = function (list) {
            localStorage.setItem("list", JSON.stringify(list));
            return true;
        };

        var setActivity = function (activity) {
            list = (!getList())? [] : getList(); 
            list.push({task: activity, completed: false, edit: false});
            localStorage.setItem("list", JSON.stringify(list));
            return list;
        };
        
        var checkStorage = function (activity) {
            return (typeof(Storage) !== "undefined")? true : false;
        };

        return {
            getList: getList,
            setActivity: setActivity,
            setChange: setChange,
            checkStorage: checkStorage
        };
    };

    app.factory("lStorage", lStorage);
}());