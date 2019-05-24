// Core
import React, { Component } from 'react';

// Helpers
import { log, getDisplayName } from '../../helpers';

export const withLogging = (
    options = { delay: 1000, color: 'cornflowerblue' },
) => {
    return (Enhanceable) => {
        class WithLogging extends Component {
            componentDidMount() {
                const { delay = 1000 } = options;

                this._report();
                this.timer = setInterval(this._report, delay);
            }

            componentWillUnmount() {
                clearInterval(this.timer);
            }

            _report = () => {
                const { color = 'cornflowerblue' } = options;
                const componentName = `${getDisplayName(Enhanceable)}`;
                log(
                    `${componentName} component logs to external service...`,
                    color,
                );
            };

            render() {
                return <Enhanceable { ...this.props } />;
            }
        }

        WithLogging.displayName = `withLogging(${getDisplayName(Enhanceable)})`;

        return WithLogging;
    };
};
