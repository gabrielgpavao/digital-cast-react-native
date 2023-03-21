import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyledHeader, StyledImgLogo } from './StyledHeader'
import { Feather } from '@expo/vector-icons'
import logo from '../../assets/icon.png'

export function Header ({ actionSheetRef }) {
	function toggleModal () {
		actionSheetRef.current?.show()
	}

	return (
		<StyledHeader>
			<StyledImgLogo source={logo}/>
			<TouchableOpacity onPress={toggleModal}>
				<Feather name='list' size={24} color='#ffffff'/>
			</TouchableOpacity>
		</StyledHeader>
	)
}
