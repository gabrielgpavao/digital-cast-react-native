import React, { createContext, useState } from 'react';

export const AudioContext = createContext({})

export function AudioProvider ({ children }) {
    const [playlist, setPlaylist] = useState([])
    
    return (
        <AudioContext.Provider value={{ playlist, setPlaylist }}>
            {children}
        </AudioContext.Provider>
    )
}
