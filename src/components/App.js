import Profile from './Profile/Profile';
import user from '../user.json'
import { GlobalStyle } from './GlobalStyle';

export default function App () {
  return (
          <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
  );
};
