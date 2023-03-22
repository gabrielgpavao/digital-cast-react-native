import React, { createContext, useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { api } from '../services/api';

export const AudioContext = createContext({})

export function AudioProvider ({ children }) {
    const [playlist, setPlaylist] = useState([])
    const [currentAudio, setCurrentAudio] = useState()
    const [currentAudioInfo, setCurrentAudioInfo] = useState({})
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        async function loadAudio () {
            const response = (await api.get('/playlist')).data || undefined
            if (response) {
                setPlaylist(response)
            }
        }
        loadAudio()
    }, [])
    
    async function playSong (source, autoPlay = false) {
        if (currentAudio) {
            await currentAudio.unloadAsync()
        }
        
        setCurrentAudioInfo(source)

        const { sound } = await Audio.Sound.createAsync({
            uri: source.uri
        })

        setCurrentAudio(sound)

        if (autoPlay) {
            setIsPlaying(true)
            await sound.playAsync()
        }
    }

    async function toggleAudio () {
        if (isPlaying) {
            await currentAudio.pauseAsync()
        } else {
            if (!currentAudio) {
                playSong(playlist[0], true)
            } else {
                await currentAudio.playAsync()
            }
        }

        setIsPlaying((prev) => !prev)
    }
    
    return (
        <AudioContext.Provider value={{ playlist, setPlaylist, currentAudioInfo, playSong, toggleAudio, isPlaying }}>
            {children}
        </AudioContext.Provider>
    )
}
