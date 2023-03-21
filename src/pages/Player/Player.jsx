import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Album } from '../../components/Album/Album';
import { Header } from '../../components/Header/Header';

export function Player () {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
                <Header/>
				<Album/>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
