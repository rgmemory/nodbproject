let express = require('express');
let bodyParser = require('body-parser');
let axios = require('axios');

let app = express();

let characterData = [];
var counter = 0;

app.use(bodyParser.json());

axios.get('https://swapi.co/api/people').then(res => {
    characterData = res.data.results.map(current => {
        counter++;
          return({
                id: counter,
                name: current.name,
                rating: 0
            })            
      })     
})

app.get('/api/characters', (req, res) => {
    res.send(characterData);
})

app.put('/api/characters/:id', (req, res) => {    
    characterData.forEach((current, index, array) => {        
        if(req.params.id == current.id){            
            array[index].rating = Number(req.body.newRating);            
        }
    })
    res.send(characterData);
})

app.post('/api/characters', (req, res) => {    
    let newCharacter = req.body.newCharacter;   
    characterData.push({id: ++counter, name: newCharacter, rating: 0});
    res.send(characterData)
})

app.delete('/api/characters/:id', (req, res) => {
    characterData.forEach((current, index, array) => {
        if(req.params.id == current.id){            
            array.splice(index, 1);
        }
    })
    res.send(characterData);
})

let port = 3005
app.listen(port, () => console.log(`listening on port ${port}`))