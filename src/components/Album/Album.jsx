import React from 'react'
import { StyledAlbum, StyledAlbumImage, StyledTitle } from './StyledAlbum'
import { useAudioContext } from '../../hooks/useAudioContext'

export function Album () {
	const { currentAudioInfo } = useAudioContext()
	
	return (
		<StyledAlbum>
			<StyledTitle>{ currentAudioInfo?.title || 'Selecione um Áudio'}</StyledTitle>
			<StyledAlbumImage
				source={{
					uri: currentAudioInfo?.imageSource || 'https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg'
				}}
			/>
		</StyledAlbum>
	)
}
