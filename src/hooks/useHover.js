import * as React from 'react';
import { noop } from '../util/index';

const { useState } = React;

const useHover = (element) => {
    const [state, setState] = useState(false);

    const onMouseEnter = (originalOnMouseEnter) => (event) => {
        (originalOnMouseEnter || noop)(event);
        setState(true);
    };
    const onMouseLeave = (originalOnMouseLeave) => (event) => {
        (originalOnMouseLeave || noop)(event);
        setState(false);
    };

    if (typeof element === 'function') {
        element = element(state);
    }

    const el = React.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });

    return [el, state];
};

export default useHover;