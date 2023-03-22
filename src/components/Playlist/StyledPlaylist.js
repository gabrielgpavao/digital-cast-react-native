import styled from 'styled-components/native';

export const StyledPlaylist = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
`

export const StyledItemInfo = styled.View`
    width: 100%;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
`

export const StyledItemInfoTitle = styled.Text`
    width: 80%;
    font-size: 22px;
    font-weight: 700;
    color: #343a40;
`

export const StyledItemInfoDate = styled.Text`
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
`

export const StyledAlbumImage = styled.Image`
    width: 88px;
    height: 88px;
` 

export const StyledItemSeparator  = styled.View`
    width: 100%;
    height: 1;
    color: rgba(0, 0, 0, 0.5);
` 
