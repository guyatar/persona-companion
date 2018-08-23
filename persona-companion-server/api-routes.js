var express = require('express');
var dataProvider = require('./data/data-provider');

var router = express.Router();

router.get('/mediaItems?', function (request, response) {
    var isCompleted = request.query.completed;
    isCompleted = (isCompleted == true || isCompleted == "true");
    response.send(dataProvider.getMediaItems(isCompleted));
});

router.get('/mediaItems/Types', function (request, response) {
    response.send(dataProvider.getMediaTypes());
});

router.get('/socialStats/Types', function (request, response) {
    response.send(dataProvider.getSocialStatTypes());
});

router.get('/contribution/Types', function (request, response) {
    response.send(dataProvider.getContributionTypes());
});

module.exports = router;