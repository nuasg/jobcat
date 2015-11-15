// app/models/job.js
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    description : String
});

module.exports = mongoose.model('Job', jobSchema);
