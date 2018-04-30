import React, {Component} from 'react';
import './updateRating.css'

export default class UpdateRating extends Component{
    constructor(){
        super()

        this.state = {
            rating: null
        }
    }

    updateInput(value){
        this.setState({
            rating: value
        })
    }   

    render(){        
        return(
            <div className="rating">
                <input type="number" onChange={e => {this.updateInput(e.target.value)}}/>
                <button onClick={() => this.props.updateRating(this.state.rating, this.props.id)}>UPDATE RATING</button>
            </div>
        )
    }
}