const express = require('express');
const realEstates = require('./data.js');
const { urlencoded, json } = require('body-parser');


const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: false }));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/home', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(realEstates));
});

app.get('/home/:id', (req, res) => {
    const isFound = realEstates.some((realEstate) => (realEstate.id) == parseInt(req.params.id));

    if (isFound) {
        const realEstate = realEstates.filter((realEstate) => (realEstate.id) == parseInt(req.params.id));
        res.status(200);
        res.setHeader('Content-Type', 'application/json');

        res.json(realEstate);
    } else {
        res.status(404);
        res.send();
    }
});

app.post('/realEstate', (req, res) => {
    if (!req.body.title ||
        !req.body.imageUrl ||
        !req.body.address ||
        !req.body.city ||
        !req.body.contact ||
        !req.body.price ||
        !req.body.category ||
        !req.body.floor ||
        !req.body.area ||
        !req.body.rooms ||
        !req.body.bathrooms ||
        !req.body.totalFlors ||
        !req.body.elevator ||
        !req.body.balcony) {
        res.status(400);
        res.send();
    } else {
        const newRealEstate = {
            id: 3,
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
        }

        realEstates.push(newRealEstate);
        res.status(201).json(newRealEstate);
    }
});

app.delete('/realEstate/:id', (req, res) => {
    const isFound = realEstates.some((realEstate) => realEstate.id === parseInt(req.params.id));
    if (isFound) {
        let deleteRealEstateIndex;
        realEstate.forEach((realEstate, index) => {
            if (realEstate.id === parseInt(req.params.id)) {
                deleteUserIndex = index;
                return;
            }
        });
        realEstates.splice(deleteRealEstateIndex, 1);
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

app.listen(port, () => {
    console.log('Aplikacija radi na adresi http://localhost:$(port)');

})