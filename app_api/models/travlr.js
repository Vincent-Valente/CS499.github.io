//Import mongoose module
const mongoose = require('mongoose');

// define the trip schema
const TripSchema = new mongoose.Schema({

    code: {type: String, required: true, unique: true },
    name: {type: String, required: true},
    length: {type: String, required: true},
    start: {type: Date, required: true},
    resort: {type: String, required: true},
    perPerson: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});


//TripSchema.path('_id');
mongoose.model('trips', TripSchema);
