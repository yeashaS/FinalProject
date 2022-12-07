const npc = require('../data/npc');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('public'));

var bySpecies = [];

bySpecies = npc.sort( function(a, b) {
    const nameA = a.Species.toUpperCase(); // ignore upper and lowercase
    const nameB = b.Species.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
});

app.get('/api/npc/species', (req, res) => {
    console.log("In get");
    // console.log(NPCs.map((char) => char.name));
    res.send(bySpecies);
});
app.listen(3000, () => console.log('Server listening on port 3000!'));