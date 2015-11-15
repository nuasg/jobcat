// app/models/job.js
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    name        : String,
    description : String,
    wage        : Number
});

module.exports = mongoose.model('Job', eventSchema);
