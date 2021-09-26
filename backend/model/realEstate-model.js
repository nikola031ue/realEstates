const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let realEstate = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String
    },
    imageUrl: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    contact: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    floor: {
        type: Number
    },
    area: {
        type: Number
    },
    rooms: {
        type: Number
    },
    totalFloors: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    elevator: {
        type: Boolean
    },
    balcony: {
        type: Boolean
    },
    description: {
        type: String
    }
}, {
    collection: 'realEstate'
})

module.exports = mongoose.model('RealEstate', realEstate)