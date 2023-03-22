import React, { createContext } from 'react';

export const AudioContext = createContext({})

export function AudioProvider ({ children }) {
    return (
        <AudioContext.Provider value={{}}>
            {children}
        </AudioContext.Provider>
    )
}
