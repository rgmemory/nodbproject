import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import Character from './components/character/character'
import UpdateRating from './components/updateRating/updateRating'
import AddCharacter from './components/addCharacter/addCharacter'

class App extends Component {

  constructor(){
    super()

    this.state = {
      characters: [],
      rating: null
    }

    this.updateRating = this.updateRating.bind(this); 
    this.deleteRating = this.deleteRating.bind(this); 
    this.addNewCharacter = this.addNewCharacter.bind(this); 
  }

  componentDidMount(){
    axios.get('/api/characters').then(res => {
      this.setState({
        characters: res.data
      })
    }).catch( e => console.log("you've got an error", e))
  }

  updateRating(newRating, charId){
    axios.put(`/api/characters/${charId}`, {newRating: newRating}).then(res => {
      this.setState({characters: res.data})
    })    
  }

  deleteRating(charId){
    axios.delete(`/api/characters/${charId}`).then(res => {
      this.setState({characters: res.data});
    })
  }

  addNewCharacter(newCharacter){
    axios.post('/api/characters', {newCharacter: newCharacter}).then( res => {
      this.setState({
        characters: res.data
      })
    });
  }

  render() {  

    var formatCharacters = this.state.characters.map((current, index) => {
      return(
        <Character          
          key={current.id}
          current={current}
          updateRating={this.updateRating}
          deleteRating={this.deleteRating}
        />
      )
    })

    return (
      <div className="App">
        <header>
          <h1>A Useful App?</h1>     
        </header>
        
        {formatCharacters}

        
        <br/>

        <AddCharacter addNewCharacter={this.addNewCharacter}/>
      </div>
    );
  }
}

export default App;


    //   url: `/api/characters/${charId}?rating=${newRating}&sheep=soft`   
