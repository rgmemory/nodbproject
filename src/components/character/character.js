import React, {Component} from 'react';
import './character.css';
import UpdateRating from '../updateRating/updateRating'
import DeleteRating from '../deleteRating/deleteRating'

function Character(props){
    return(
        <div className="character">
            <div className="characterdisplay">
                {props.current.name}
                
            </div>
            <div className="props">
                <UpdateRating id={props.current.id} updateRating={props.updateRating}/>
                <DeleteRating id={props.current.id} deleteRating={props.deleteRating}/>
                <div className="rating">{props.current.rating}</div>
            </div>

          
        </div>
    )
}

export default Character;

