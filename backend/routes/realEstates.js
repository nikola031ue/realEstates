var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const realEstateModel = require('../model/realEstate-model');

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.send('RealEstates works');
});
//ovde se prave rute i maapiraju u ontrollers

router.post('/add', function(req, res, next) {

    let newRealEstate = new realEstateModel({
        id: req.body.id,
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        address: req.body.address,
        city: req.body.city,
        contact: req.body.contact,
        price: req.body.price,
        category: req.body.category,
        floor: req.body.floor,
        area: req.body.area,
        rooms: req.body.rooms,
        bathrooms: req.body.bathrooms,
        totalFlors: req.body.totalFlors,
        elevator: req.body.elevator,
        balcony: req.body.balcony,
        description: req.body.description
    });

    newRealEstate.save(function(err, newRealEstate) {
        if (err) {
            res.send('err');
        } else {
            res.send({ status: 200, message: 'Real Estate add successfully', realEstateObj: newRealEstate });
        }
    });

});

router.get('/listAll', function(req, res, next) {

    realEstateModel.find(function(err, response) {
        if (err) {
            res.send('err');
        } else {
            res.send(response);
        }
    });

});

router.get('/listByCategory', function(req, res, next) {
    const category = req.query.category;
    realEstateModel.find({ category: category }, function(err, response) {
        if (err) {
            res.send('err');
        } else {
            res.send({ status: 200, resultsFound: response.length, realEstates: response });
        }
    });

});
// moze i vise argumenata gde je idQuery ide JSON sa parametrima
router.get('/listById/:id', function(req, res, next) {
    const idQuery = req.params.id;
    realEstateModel.findById(idQuery, function(err, response) {
        if (err) {
            res.send('err');
        } else {
            res.send(response);
        }
    });

});

router.put('/update', function(req, res, next) {
    const id = req.query.id;
    const category = req.query.category;

    realEstateModel.findByIdAndUpdate(id, { category: category }, function(err, response) {
        if (err) {
            res.send('err');
        } else {
            res.send({ status: 200, resultsFound: response.length, realEstates: response });
        }
    });

});

router.delete('/update', function(req, res, next) {
    const id = req.query.id;
    const category = req.query.category;

    realEstateModel.findByIdAndDelete(id, function(err, response) {
        if (err) {
            res.send('err');
        } else {
            res.send({ status: 200, resultsFound: response.length, realEstates: response });
        }
    });

});

module.exports = router;