import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyledHeader, StyledImgLogo } from './StyledHeader'
import { Feather } from '@expo/vector-icons'
import logo from '../../assets/icon.png'

export function Header () {
	return (
		<StyledHeader>
			<StyledImgLogo source={logo}/>
			<TouchableOpacity>
				<Feather name='list' size={24} color='#ffffff'/>
			</TouchableOpacity>
		</StyledHeader>
	)
}
