var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

const mongoose = require('mongoose');
const realEstateModel = require('../model/realEstate-model');

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.send('RealEstates works');
});
//ovde se prave rute i maapiraju u ontrollers

router.post('/add', function(req, res, next) {
    //pravi prazan objekat u bazi
    // let newRE = null;
    // try {
    //     newRe = JSON.stringify(req)
    //     newRe = JSON.parse(newRe);
    // } catch (e) {
    //     newRE = req;
    // }
    // const realEstate = new realEstateModel(newRE);
    // realEstate.save().then((document) => {
    //     res.setHeader("Content-Type", "application/json");
    //     res.status(200).json({ success: true, data: document, message: 'Dodato u bazu' });
    // })

    //Object { headers: {…}, status: 200, statusText: "OK", url: "http://localhost:3000/realEstates/add", ok: false, name: "HttpErrorResponse", message: "Http failure during parsing for http://localhost:3000/realEstates/add", error: {…} } ​
    // error: Object { error: SyntaxError, text: "err" }
    // headers: Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit()
    //  }
    // message: "Http failure during parsing for http://localhost:3000/realEstates/add"
    // name: "HttpErrorResponse"
    // ok: false
    // status: 200
    // statusText: "OK"
    // url: "http://localhost:3000/realEstates/add"
    const newRealEstate = new realEstateModel({
        _id: new mongoose.Types.ObjectId,
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

    newRealEstate.save().then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(201).json({
        message: "Handling POST requests to /realEstates",
        createdRealEstate: newRealEstate
    });

    // newRealEstate.save(function(err, newRealEstate) {
    //     if (err) {
    //         res.send('err');
    //     } else {
    //         res.send(newRealEstate);
    //     }
    // });


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
    realEstateModel.find({ area: category }, function(err, response) {
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

router.patch('/update/:id', function(req, res, next) {
    const id = req.params.id;
    // const price = req.query.price;

    realEstateModel.updateOne({ _id: id }, { $set: { price: req.body.price } })
        .exec()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });

    // realEstateModel.findByIdAndUpdate(id, { price: price }, function(err, response) {
    //     if (err) {
    //         res.send('err');
    //     } else {
    //         res.send(response);
    //     }
    // });

});

router.delete('/delete/:id', function(req, res, next) {
    const id = req.params.id;

    realEstateModel.remove({ _id: id })
        .exec()
        .then(resuslt => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })

    // realEstateModel.findByIdAndDelete(id, function(err, response) {
    //     if (err) {
    //         res.send('err');
    //     } else {
    //         res.send({ status: 200, resultsFound: response.length, realEstates: response });
    //     }
    // });

});

module.exports = router;