import React, { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { StyledAlbumImage, StyledItemInfo, StyledItemInfoDate, StyledItemInfoTitle, StyledItemSeparator, StyledPlaylist } from './StyledPlaylist'
import { useAudioContext } from '../../hooks/useAudioContext'
import { api } from '../../services/api'

export function Playlist () {
    const { playlist, setPlaylist } = useAudioContext()

    useEffect(() => {
        async function loadAudio () {
            const response = (await api.get('/playlist')).data || undefined
            if (response) {
                setPlaylist(response)
            }
        }
        loadAudio()
    }, [])
    
    return (
        <ScrollView>
            <FlatList
                data={playlist}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <StyledItemSeparator/>}
                renderItem={({ item }) => (
                    <StyledPlaylist id={item.id}>
                        <StyledAlbumImage source={{
                            uri: item.imageSource
                        }}/>

                        <StyledItemInfo>
                            <StyledItemInfoTitle>{item.title}</StyledItemInfoTitle>
                            <StyledItemInfoDate>{item.date}</StyledItemInfoDate>
                        </StyledItemInfo>
                    </StyledPlaylist>
                )}
            />
        </ScrollView>
    )
}
