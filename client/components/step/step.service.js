"use strict";

myApp.factory('steps', ['$http', function ($http) {

    var url = window.parent.location.origin + '/api';
    var imgUri = 'http://7xl4qs.com1.z0.glb.clouddn.com';

    var steps = {};
    var movements = null;
    return {
        getStepsBymID: function (mId, callback) {

            if (steps[mId]) return callback(null, steps[mId]);

            $http.get(url + '/steps/' + mId)
            .success(function (data) {
                delete data.id;
                for (var i in data) {
                    for (var j = 0; j < data[i].imgList.length; j++) {
                        data[i].imgList[j].imgUrl = imgUri + '/' + data[i].imgList[j].imgUrl;
                    }
                }
                steps[mId] = data;
                return callback(null, data);
            })
            .error(function (err) {
                return callback(err, null);
            });
        },
        getMovements: function (callback) {

            if (movements) return callback(null, movements);

            $http.get(url + '/movements')
            .success(function (data) {
                for (var i in data) {
                    data[i].backgroundImgUrl = imgUri + '/' + data[i].backgroundImgUrl;
                }
                movements = data;
                return callback(null, data);
            })
            .error(function (err) {
                return callback(err, null);
            });
        }
    };
}]);
