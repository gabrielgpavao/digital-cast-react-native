import { StatusBar } from 'expo-status-bar';
import { Player } from './pages/Player/Player';
import { StyledMainBackground } from './StyledMainBackground';

export function Main () {
    return (
        <>
            <StatusBar/>
            <StyledMainBackground>
                <Player/>
            </StyledMainBackground>
        </>
    )
}