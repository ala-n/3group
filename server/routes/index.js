var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var TestQuestion = mongoose.model('TestQuestion');
var InsertTestQuestion = mongoose.model('InsertTestQuestion');
var ReadingQuestion = mongoose.model('ReadingQuestion');
var AudioQuestion = mongoose.model('AudioQuestion');
var OpenQuestion = mongoose.model('OpenQuestion');
var SpeechQuestion = mongoose.model('SpeechQuestion');
var Test = mongoose.model('Test');
var Answer = mongoose.model('Answer');
var path = require('path');
var Validator = require('../libs/requestValidator');

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/test', function (req, res) {
    res.end();
});

router.get('/is_authenticated', function (req, res) {
    res.json(req.isAuthenticated());
});

router.get('/app_routes', function (req, res) {
    res.sendFile(__dirname + '\\index.js');
});

router.get('/dist/app/app.routes.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../config/app.routes.' + (req.user ? req.user.role + '.' : '') + 'js'));
});

module.exports = router;