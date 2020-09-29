import React from 'react';
import { Card } from '../card/card';
import './card-list.styles.css';
export const CardList = props => {

    return (
        <div className={"CardList"}>
            {props.data.map(item => {
                return (
                    <Card key={item.id} data={item}/>
                )
            })}
        </div>
    )
}