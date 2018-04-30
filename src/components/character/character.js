import React, {Component} from 'react';
import './character.css';
import UpdateRating from '../updateRating/updateRating'
import DeleteRating from '../deleteRating/deleteRating'

function Character(props){
    return(
        <div className="character">
            {/* {props.current.id})  */}
            {props.current.name},
            Rating: {props.current.rating}
            <div className="props">
                <UpdateRating id={props.current.id} updateRating={props.updateRating}/>
                <DeleteRating id={props.current.id} deleteRating={props.deleteRating}/>
            </div>

          
        </div>
    )
}

export default Character;

