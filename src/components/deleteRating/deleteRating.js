import React, {Component} from 'react';

export default class DeleteRating extends Component{
    constructor(){
        super()

        this.state = {
            rating: null
        }

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(value){
        this.setState({
            rating: value
        })
    }   

    render(){        
        return(
            <div className="rating">
                <button onClick={() => this.props.deleteRating(this.props.id)}>DELETE CHARACTER</button>
            </div>
        )
    }
}