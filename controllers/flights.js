const FlightModel = require('../models/flight');

module.exports = {
    index
};

function index(req, res) {
    FlightModel.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
};