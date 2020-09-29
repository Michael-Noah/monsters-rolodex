import React from 'react';
import './card.styles.css';

export const Card = props => {
    return (
        <div className="CardContainer">
            <img src={`https://robohash.org/${props.data.id}?set=set2&size=180x180`} alt="Monster" />
            <h2>NAME: {props.data.name}</h2>
            <p>Email: {props.data.email}</p>
        </div>
    )
}