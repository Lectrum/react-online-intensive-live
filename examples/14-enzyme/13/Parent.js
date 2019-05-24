// Core
import React, { Component } from 'react';

export class Parent extends Component {
    state = {
        visible: false,
    };

    render() {
        return (
            <section>
                <h1>Welcome!</h1>
                {this.state.visible && (
                    <p>Lorem ipsum dolor sit amet!</p>
                )}
            </section>
        );
    }
}
