import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';
import '../card/card.component';




export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(ali => (
            <Card key={ali.id} ali={ali} ></Card>))}
    </div>

);