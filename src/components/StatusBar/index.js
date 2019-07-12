// Core
import React, { useState, useEffect, useContext } from 'react';
import cx from 'classnames';
import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';

// Components
import { Context } from '../';

// Instruments
import Styles from './styles.module.css';
import { socket } from '../../socket/init';

export const StatusBar = (props) => {
    const [ isOnline, setIsOnline ] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
        socket.on('connect', () => setIsOnline(true));
        socket.on('disconnect', () => setIsOnline(false));

        return () => {
            socket.removeListener('connect');
            socket.removeListener('disconnect');
        };
    }, []);

    const animateStatusBarEnter = (statusBar) => {
        TweenMax.fromTo(statusBar, 1, { opacity: 0 }, { opacity: 1 });
    };

    const statusStyle = cx(Styles.status, {
        [ Styles.online ]:  isOnline,
        [ Styles.offline ]: !isOnline,
    });

    const statusMessage = isOnline ? 'Online' : 'Offline';

    const links = props.isAuthenticated && (
        <>
            <Link to = '/profile'>
                <img src = { context.avatar } />
                <span>{context.currentUserFirstName}</span>
            </Link>
            <Link to = '/feed'>Feed</Link>
            <a onClick = { () => props.logout() }>Logout</a>
        </>
    );

    return (
        <Transition
            appear
            in
            timeout = { 1000 }
            onEnter = { animateStatusBarEnter }>
            <section className = { Styles.statusBar }>
                <div className = { statusStyle }>
                    <div>{statusMessage}</div>
                    <span />
                </div>
                {links}
            </section>
        </Transition>
    );
};
