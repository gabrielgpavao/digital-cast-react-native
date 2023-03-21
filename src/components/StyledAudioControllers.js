import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width - 40

export const StyledAudioController = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
`

export const StyledButton = styled.View`
    display: flex;
    flex-direction: row;
    width: ${screenWidth}px;
    justify-content: space-between;
    align-items: center;

`

export const StyledControllers = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 85px;
    border-radius: 42px;
    background-color: #f43f30;

    ${({primary}) => {
        if (!primary) {
            return css`
                width: 66px;
                height: 66px;
                border-radius: 33px;
                background-color: #fe9541;
            `
        }
    }}  
`
