import { useContext } from 'react'
import { AudioContext } from '../context/AudioContext'

export function useAudioContext () {
    const context = useContext(AudioContext)

    if (!context) {
        throw new Error ('Hook must be called inside the context provider')
    }

    return context
}
