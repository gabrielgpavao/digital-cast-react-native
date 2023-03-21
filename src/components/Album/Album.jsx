import React from 'react'
import { StyledAlbum, StyledAlbumImage, StyledTitle } from './StyledAlbum'

export function Album () {
	return (
		<StyledAlbum>
			<StyledTitle>Selecione um áudio</StyledTitle>
			<StyledAlbumImage source={{ uri: 'https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg' }}/>
		</StyledAlbum>
	)
}
