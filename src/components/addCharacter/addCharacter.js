import React, {Component} from 'react';
import '../character/character.css'

export default class UpdateRating extends Component{
    constructor(){
        super()

        this.state = {
            character: ''
        }
    }

    updateInput(value){
        console.log(value);
        this.setState({
            character: value
        })
    }   

    render(){        
        return(
            <div className="rating">
                <input type="text" onChange={e => {this.updateInput(e.target.value)}}/>
                <button onClick={() => this.props.addNewCharacter(this.state.character)}>ADD CHARACTER</button>
            </div>
        )
    }
}