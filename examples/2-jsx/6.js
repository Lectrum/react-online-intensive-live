// Core
import React from 'react';
import { render } from 'react-dom';

const element = (
    <section className = 'newsFeed'>
        <h1>News Feed</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            faucibus ex ac nunc efficitur vulputate. In hac habitasse platea
            dictumst.
        </p>
        <input
            defaultChecked
            id = 'subscribe'
            name = 'subscription'
            type = 'radio'
        />
        <label htmlFor = 'subscribe'>Subscribe to newsletter</label>
        <br />
        <br />
        <input
            defaultChecked = { false }
            id = 'unsubscribe'
            name = 'subscription'
            type = 'radio'
        />
        <label
            htmlFor = 'unsubscribe'
            value = 'hello'>
            Unsubscribe from newsletter
        </label>
        <br />
        <br />
        <input
            type = 'submit'
            value = 'Submit'
        />
    </section>
);

render(element, document.getElementById('root'));
