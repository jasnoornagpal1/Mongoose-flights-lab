const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    Departs: Date,
})

let flightModel = mongoose.model('flight', flightSchema)

module.exports = {
    flightModel,
}
