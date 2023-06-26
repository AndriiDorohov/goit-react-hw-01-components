import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
    return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <Statistics stats={data} />
    </>
  );
}
