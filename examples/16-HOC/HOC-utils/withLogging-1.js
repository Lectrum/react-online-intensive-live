// Core
import React, { Component } from 'react';

// Helpers
import { log, getDisplayName } from '../../helpers';

export const withLogging = (Enhanceable) => {
    class WithLogging extends Component {
        componentDidMount() {
            this._report();

            this.timer = setInterval(this._report, 3000);
        }

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        _report = () => {
            const componentName = `${getDisplayName(Enhanceable)}`;
            log(
                `${componentName} component logs to external service...`,
                'cornflowerblue',
            );
        };

        render() {
            return <Enhanceable { ...this.props } />;
        }
    }

    WithLogging.displayName = `withLogging(${getDisplayName(Enhanceable)})`;

    return WithLogging;
};
