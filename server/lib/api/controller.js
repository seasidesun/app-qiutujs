'use strict';

var ctcd_info = require('const_ctd.js'); // {movements: {}, steps: {}}

module.exports.getCtcdStepBySId = function (req, res, next) {

    var mID = req.parmas.mID;
    var sID = req.parmas.sID;

    res.json(ctcd_info.steps[mID][sID]);
};
