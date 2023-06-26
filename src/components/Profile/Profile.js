import React from 'react';
import {
  ProfileContainer,
  Description,
  Avatar,
  Tag,
  Name,
  StatsList,
  StatItem,
  Label,
  Quantity,
  ImageContainer,
  Image,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <ImageContainer>
          <Avatar src={avatar} alt="User avatar" />
        </ImageContainer>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};

export default Profile;