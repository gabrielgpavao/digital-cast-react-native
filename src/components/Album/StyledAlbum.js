import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width - 40 

export const StyledAlbum = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
`

export const StyledTitle = styled.Text`
	color: #ffffff;
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 20px;
`

export const StyledAlbumImage = styled.Image`
	width: ${screenWidth}px;
	height: 350px;
`
