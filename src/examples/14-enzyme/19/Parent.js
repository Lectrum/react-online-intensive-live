// Core
import React, { Component } from 'react';

export class Parent extends Component {
    componentDidMount() {
        this.props.fetchDataAsync(this.props.id);
    }

    render() {
        return (
            <section>
                <h1>Welcome!</h1>
                <p>Lorem ipsum dolor sit amet!</p>
            </section>
        );
    }
}
