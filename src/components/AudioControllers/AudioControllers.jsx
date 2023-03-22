import React from 'react';
import {
	StyledAudioController,
	StyledButton,
	StyledControllers,
} from '../StyledAudioControllers';
import { Feather } from '@expo/vector-icons';
import { useAudioContext } from '../../hooks/useAudioContext';

export function AudioControllers() {
	const { playlist, isPlaying, toggleAudio, currentAudioInfo, playSong } = useAudioContext()

	function playNextAudio () {
        let nextAudio = playlist.find((audio) => {
            return Number(audio.id) === (Number(currentAudioInfo.id) + 1)
        })
        
        if (!nextAudio) {
            nextAudio = playlist.find((audio) => audio.id ===  '1')
        }

        playSong(nextAudio, true)
    }

    function playPrevAudio () {
        let nextAudio = playlist.find((audio) => {
            return Number(audio.id) === (Number(currentAudioInfo.id) - 1)
        })
        
        if (!nextAudio) {
            nextAudio = playlist.find((audio) => audio.id ===  playlist[playlist.length - 1].id)
        }

        playSong(nextAudio, true)
    }
	
	return (
		<StyledAudioController>
			<StyledButton>
				<StyledControllers onPress={playPrevAudio}>
					<Feather name='chevron-left' size={24} color='#ffffff' />
				</StyledControllers>

				<StyledControllers primary onPress={toggleAudio}>
					<Feather name={ isPlaying ? 'pause' : 'play'} size={32} color='#ffffff' />
				</StyledControllers>

				<StyledControllers onPress={playNextAudio}>
					<Feather name='chevron-right' size={24} color='#ffffff' />
				</StyledControllers>
			</StyledButton>
		</StyledAudioController>
	);
}
