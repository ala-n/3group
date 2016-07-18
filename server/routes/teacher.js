var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = mongoose.model('Test');
var mdlwares = require('../libs/mdlwares');

router.use(mdlwares.isTeacher);

router.get('/tests', function(req, res, next) {
    Test.find({teacher: req.user.username, status: 'checked'}, function (err, tests) {
        var response = [];
        if(tests != undefined) {
            tests.forEach(function (test, tests) {
                response.push(test.getTestInfo());
            });
        }
        res.send(response);
    });
});

module.exports = router;