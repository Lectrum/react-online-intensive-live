// Core
import React, { Component } from 'react';

// Helpers
import { getDisplayName } from '../../helpers';

const enhance = (
    Enhanceable,
    options = {
        color1:     'red',
        color2:     'blue',
        transition: 'font-size .3s ease',
    },
) => {
    class WithHover extends Component {
        state = {
            isHover: false,
        };

        _handleMouseEnter = () => this.setState({ isHover: true });
        _handleMouseLeave = () => this.setState({ isHover: false });
        _getStyle = () => {
            const { isHover } = this.state;
            const {
                color1 = 'coral',
                color2 = 'navy',
                fontSize = 18,
                transition = 'font-size .3s ease',
            } = options;

            const style = {
                cursor:   'pointer',
                color:    isHover ? color1 : color2,
                fontSize: isHover ? fontSize : 20,
                transition,
            };

            return style;
        };

        render() {
            const style = this._getStyle();

            return (
                <span
                    onMouseEnter = { this._handleMouseEnter }
                    onMouseLeave = { this._handleMouseLeave }>
                    <Enhanceable style = { style } />
                </span>
            );
        }
    }

    WithHover.displayName = `withHover(${getDisplayName(Enhanceable)})`;

    return WithHover;
};

export const withHover = (options) => (Enhanceable) => enhance(Enhanceable, options);
