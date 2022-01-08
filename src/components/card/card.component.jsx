import React from 'react';
import './card.styles.css';



export const Card= props =>(
    <div className='card-container'>
        <img alt="monster"  src={`https://robohash.org/${props.ali.id}?set-set2&size=100x100`}/>
        <h2>{props.ali.name} </h2>
        <p> {props.ali.email}</p>

    </div>


);