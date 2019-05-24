// Core
import React, { Component } from 'react';

// Components
import { Tracker } from './Tracker';

export class Room extends Component {
    render() {
        return (
            <div className = 'room'>
                <h1>Поиграем в кошки-мышки!</h1>
                <Tracker render = { (data) => <h1>координаты по x: {data.x}</h1> } />
            </div>
        );
    }
}
