
const artists = require('./data/artistInfo');
const npc = require('./data/npc');
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
// console.log(artists.map((item)=> item.name));


var artist = [];
var id = 0;
var jsonId = "";

artists.map((items) =>{
    id += 1;
    let pictures =
        {
            name: items.name,
            link: items.link,
            image: items.image,
            id: id,
        };
    artist.push(pictures);}
)

app.get('/api/artists', (req, res) => {
    console.log("In get");
    res.send(artist);
});




let byName = npc.sort( function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
});
app.get('/api/npc/name', (req, res) => {
    console.log("In get");
    res.send(byName);
});

app.get('/api/npc/:nameID', (req,res) =>{
    let selectedNPC = (req.params.nameID);

    let foundNPC = npc.find(({nameID}) => nameID == selectedNPC);

    res.send(foundNPC);
})







app.listen(3000, () => console.log('Server listening on port 3000!'));

