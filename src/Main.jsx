import { StatusBar } from 'expo-status-bar';
import { AudioProvider } from './context/AudioContext';
import { Player } from './pages/Player/Player';
import { StyledMainBackground } from './StyledMainBackground';

export function Main () {
    return (
        <AudioProvider>
            <StatusBar/>
            <StyledMainBackground>
                <Player/>
            </StyledMainBackground>
        </AudioProvider>
    )
}