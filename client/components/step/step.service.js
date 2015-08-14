'use strict';

myApp.factory('steps', function ($http) {

    var url = 'http://127.0.0.1:3001/api';

    var steps = {};
    var movements = null;
    return {
        getStepsBymID: function (mId, callback) {

            if (steps[mId]) return callback(null, steps[mId]);

            $http.get(url + '/steps/' + mId)
            .success(function (data) {
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
                movements = data;
                return callback(null, data);
            })
            .error(function (err) {
                return callback(err, null);
            });
        }
    };
});
