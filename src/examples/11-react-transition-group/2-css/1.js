// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Animation = () => {
    const [ isEntering, setIsEntering ] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsEntering((prevIsEntering) => !prevIsEntering);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className = 'example'>
            <CSSTransition
                classNames = {{
                    enter:       'enter',
                    enterActive: 'enterActive',
                    exit:        'exit',
                    exitActive:  'exitActive',
                }}
                in = { isEntering }
                timeout = { 4500 }>
                <b />
            </CSSTransition>
        </section>
    );
};

render(<Animation />, document.getElementById('root'));
