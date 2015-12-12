'use strict';

var ctcd_info = require('./const_ctcd.js'); // {movements: {}, steps: {}}

module.exports.getCtcdStepBySId = function (req, res, next) {

    var mId = req.params.mId;
    var sId = req.params.sId;

    res.json(ctcd_info.steps[mId][sId]);
};
