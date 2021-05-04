const Flight = require('../models/flight');


module.exports = {
    index,
    new: newFlight,
    create: createFlight
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
};

function newFlight(req, res) {
    res.render('flights/new')
}

async function createFlight(req, res) {
    Flight.create({
        airline: req.body.airline,
        airport: req.body.airport,
        flightNo: req.body.flightNo,
        departs: req.body.departs
    });
    const flight = new Flight(req.body);
    flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}