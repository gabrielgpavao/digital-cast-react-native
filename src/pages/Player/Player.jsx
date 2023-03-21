import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header/Header';

export function Player () {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
                <Header/>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
