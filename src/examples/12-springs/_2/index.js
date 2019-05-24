// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Spring } from 'react-spring';

// Instruments
import './styles.css';

class Room extends Component {
    state = {
        show: false,
    };

    _toggleCircle = () => {
        this.setState(({ show }) => ({
            show: !show,
        }));
    };

    render() {
        const { show } = this.state;

        return (
            <section className = 'room'>
                <button onClick = { this._toggleCircle }>
                    {show ? 'Hide' : 'Show'}
                </button>
                {show ? (
                    <Spring
                        from = {{
                            test: 0,
                        }}
                        to = {{
                            test: 1,
                        }}>
                        {(props) => <h1 style = { props }> {props.test}</h1>}
                    </Spring>
                ) : null}
            </section>
        );
    }
}

render(<Room />, document.getElementById('root'));
