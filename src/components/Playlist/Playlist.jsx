import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { StyledAlbumImage, StyledItemInfo, StyledItemInfoDate, StyledItemInfoTitle, StyledItemSeparator, StyledPlaylist } from './StyledPlaylist'

export function Playlist () {
    const dataMock = [
        {
            id: 1,
            title: 'Walk this way',
            date: '02/05/2019'
        }
    ]
    
    return (
        <ScrollView>
            <FlatList
                data={dataMock}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <StyledItemSeparator/>}
                renderItem={({ item }) => (
                    <StyledPlaylist id={item.id}>
                        <StyledAlbumImage source={{
                            uri: 'https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg'
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