import React from 'react';
import {
	StyledAudioController,
	StyledButton,
	StyledControllers,
} from '../StyledAudioControllers';
import { Feather } from '@expo/vector-icons';

export function AudioControllers() {
	return (
		<StyledAudioController>
			<StyledButton>
				<StyledControllers>
					<Feather name='chevron-left' size={24} color='#ffffff' />
				</StyledControllers>

				<StyledControllers primary>
					<Feather name='play' size={32} color='#ffffff' />
				</StyledControllers>

				<StyledControllers>
					<Feather name='chevron-right' size={24} color='#ffffff' />
				</StyledControllers>
			</StyledButton>
		</StyledAudioController>
	);
}
