import React from 'react';
import {
	StyledAudioController,
	StyledButton,
	StyledControllers,
} from '../StyledAudioControllers';
import { Feather } from '@expo/vector-icons';
import { useAudioContext } from '../../hooks/useAudioContext';

export function AudioControllers() {
	const { isPlaying, toggleAudio } = useAudioContext()
	
	return (
		<StyledAudioController>
			<StyledButton>
				<StyledControllers>
					<Feather name='chevron-left' size={24} color='#ffffff' />
				</StyledControllers>

				<StyledControllers primary onPress={toggleAudio}>
					<Feather name={ isPlaying ? 'pause' : 'play'} size={32} color='#ffffff' />
				</StyledControllers>

				<StyledControllers>
					<Feather name='chevron-right' size={24} color='#ffffff' />
				</StyledControllers>
			</StyledButton>
		</StyledAudioController>
	);
}
