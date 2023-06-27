import React from 'react';
import {
    SetColor,
    Item,
    Status,
    Avatar,
    Name
 } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
    <>
        {friends.map((prof) => (
        <Item key={prof.id}>
                <Status color={SetColor(prof.isOnline)}></Status>
                <Avatar src={prof.avatar} alt={prof.name} width="48" />
            <Name>{prof.name}</Name>
            </Item>
        ))}
    </>
    );
}

export default FriendList;