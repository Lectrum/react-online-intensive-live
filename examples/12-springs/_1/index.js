// Core
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Spring } from 'react-spring';

// Instruments
import './styles.css';

const Room = () => {
    const [ show, setShow ] = useState(false);

    const toggleCircle = () => setShow((prevShow) => !prevShow);

    return (
        <section className = 'room'>
            <button onClick = { toggleCircle }>{show ? 'Hide' : 'Show'}</button>
            {show && (
                <Spring
                    from = {{
                        opacity:      0,
                        borderRadius: '0%',
                        width:        10,
                        height:       10,
                    }}
                    to = {{
                        opacity:      1,
                        borderRadius: '50%',
                        width:        300,
                        height:       300,
                    }}>
                    {(props) => <div style = { props } />}
                </Spring>
            )}
        </section>
    );
};

render(<Room />, document.getElementById('root'));
