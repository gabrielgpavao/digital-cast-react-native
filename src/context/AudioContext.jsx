import React, { createContext, useState } from 'react';
import { Audio } from 'expo-av';

export const AudioContext = createContext({})

export function AudioProvider ({ children }) {
    const [playlist, setPlaylist] = useState([])
    const [currentAudio, setCurrentAudio] = useState()
    const [currentAudioInfo, setCurrentAudioInfo] = useState()
    const [isPlaying, setIsPlaying] = useState(false)

    async function playSong (source, autoPlay = false) {
        if (currentAudio) {
            await currentAudio.unloadAsync()
        }
        
        setCurrentAudioInfo(source)

        const { audio } = Audio.Sound.createAsync({
            uri: source.uri
        })

        setCurrentAudio(audio)

        if (autoPlay) {
            setIsPlaying(true)
            await audio.playAsync()
        }
    }

    async function toggleAudio () {
        if (isPlaying) {
            await currentAudio.pauseAsync()
        } else {
            await currentAudio.playAsync()
        }

        setIsPlaying((prev) => !prev)
    }
    
    return (
        <AudioContext.Provider value={{ playlist, setPlaylist, currentAudioInfo, playSong, toggleAudio }}>
            {children}
        </AudioContext.Provider>
    )
}
