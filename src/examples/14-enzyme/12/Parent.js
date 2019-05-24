// Core
import React, { Component } from 'react';

export class Parent extends Component {
    render() {
        const { message } = this.props;

        return (
            <section>
                <h1>Welcome!</h1>
                <p>{message}</p>
            </section>
        );
    }
}
