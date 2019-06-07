// Core
import { createContext } from 'react';

const fallbackData = {
    title: 'Lord of The Rings',
    page:  1489,
};

export const Context = createContext(fallbackData);
export const { Provider, Consumer } = Context;
