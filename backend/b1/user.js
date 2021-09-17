const express = require('express');
const users = require('./data.js');
const { urlencoded, json } = require('body-parser');


const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: false }));

//http://localhost:3000/users/1 brisanje
app.delete('users/:id', (req, res) => {
    const isFound = users.some((user) => user.id === parseInt(req.params.id));
    if (isFound) {
        let deleteUserIndex;
        user.forEach((user, index) => {
            if (user.id === parseInt(req.params.id)) {
                deleteUserIndex = index;
                return;
            }
        });
        users.splice(deleteUserIndex, 1);
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});


//http://localhost:3000/users/1 promeni neki podatak(sifru) ~33min
app.put('users/:id', (req, res) => {
    const isFound = users.some((user) => user.id === parseInt(req.params.id));

    if (isFound) {
        const updatePasswordInfo = req.body;

        users.forEach((user) => {
            if (user.id == parseInt(req.params.id)) {
                if (updatePasswordInfo.currentPassword != user.password) {
                    res.status(400).send();
                } else {
                    user.password = updatePasswordInfo.newPassword;
                    res.status(200).send();
                }
            }
        });
    } else {
        res.status(400).send();
    }
});



//http://localhost:3000/users dodaj novog korisnika
app.post('/users', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        res.status(400);
        res.send();
    } else {
        const newUser = {
            id: 23,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            status: 'active'
        }

        users.push(newUser);
        res.status(201).json(newUser);
    }
});

//http://localhost:3000/users/1
app.get('/users/:id', (req, res) => {
    const isFound = users.some((user) => (user.id) == parseInt(req.params.id));

    if (isFound) {
        const user = users.filter((user) => (user.id) == parseInt(req.params.id));
        res.status(200);
        res.json(user);
    } else {
        res.status(404);
        res.send();
    }
});


//http://localhost:3000/users
// app.get('/users', (req, res) => {
//     res.status(200).json(users);
// })

// app.get('/users', (req, res) => {
//     res.status(200);
//     res.set('Content-Type', 'application/json');
//     res.send(JSON.stringify(users));
// });
app.listen(port, () => {
    console.log('App na adresi http://localhost:$(port)');
});

//error block
// router.use((req, res, next) => {
//     const unknownMethod = req.method;
//     const unknownPath = req.path;
//     res.status(500).json({ 'message': 'Nepoznat zahtev ${unknownMethod} ka ${unknownPath}' });
// });

// module.exports = router;