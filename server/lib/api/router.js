'use strict';

var control = require('./controller');
var router = require('express').Router();

    router.get('/movement/:mId/step/:sId', control.getStepBySId);

module.exports = router;
