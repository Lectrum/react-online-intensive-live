// Core
import React, { Component } from 'react';

// Helpers
import { getDisplayName } from '../helpers';

export const withSvg = (
    { viewBoxWidth = 0, viewBoxHeight = 0, width = 0, height = 0 } = {
        viewBoxWidth:  0,
        viewBoxHeight: 0,
        width:         0,
        height:        0,
    },
) => (Enhanceable) => {
    class WithSvg extends Component {
        static defaultProps = {
            color1: '#f00',
            width,
            height,
        };

        state = {
            hover:   false,
            checked: false,
        };

        _getEnhanceableProps = () => {
            const enhanceableProps = { ...this.state, ...this.props };

            delete enhanceableProps.width;
            delete enhanceableProps.height;

            return enhanceableProps;
        };

        _getSvgStyles = () => {
            const { width: renamedWidth, height: renamedHeight } = this.props;

            return { width: renamedWidth, height: renamedHeight };
        };

        _handleMouseEnter = () => this.setState(() => ({ hover: true }));
        _handleMouseLeave = () => this.setState(() => ({ hover: false }));
        _handleClick = () => this.setState(({ checked }) => ({ checked: !checked }));

        render() {
            const svgStyles = this._getSvgStyles();
            const enhanceableProps = this._getEnhanceableProps();

            return (
                <div
                    style = {{
                        lineHeight: 0,
                    }}
                    onClick = { this.props.onClick || this._handleClick }
                    onMouseEnter = { this._handleMouseEnter }
                    onMouseLeave = { this._handleMouseLeave }>
                    <svg
                        style = { svgStyles }
                        version = '1.1'
                        viewBox = { `0 0 ${viewBoxWidth} ${viewBoxHeight}` }>
                        <Enhanceable { ...enhanceableProps } />
                    </svg>
                </div>
            );
        }
    }
    WithSvg.displayName = `withSvg(${getDisplayName(Enhanceable)})`;

    return WithSvg;
};
