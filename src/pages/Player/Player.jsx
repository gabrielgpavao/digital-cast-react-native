import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Album } from '../../components/Album/Album';
import { AudioControllers } from '../../components/AudioControllers';
import { Header } from '../../components/Header/Header';

export function Player () {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
                <Header/>
				<ScrollView>
					<Album/>
					<AudioControllers/>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
