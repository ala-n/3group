var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = mongoose.model('Test');
var Answer = mongoose.model('Answer');
var testService = require('../services/testService');
var answerService = require('../services/answerService');
var mdlwares = require('../libs/mdlwares');
var response = require('../libs/responseHelper');

router.use(mdlwares.isTeacher);

router.get('/tests', function (req, res, next) {
    testService.getTeachersTests(req.user.id, response.dataResponse(res));
});

router.post('/check_test', function (req, res, next) {
    testService.getAnswers(req.body.testId, response.dataResponse(res));
});

router.post('/check_answer', function (req, res, next) {
    answerService.getAnswerById(req.body.answerId, response.dataResponse(res));
});

module.exports = router;