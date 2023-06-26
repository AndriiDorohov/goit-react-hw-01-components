# Social Network Profile

It is necessary to create a component `<Profile>`, with which we could display
information about the user of the social network. User data is stored in the
[user.json](./user.json) file.

![Preview of the Profile component](./preview.png)

## Description of the `<Profile>` component

The component must accept several propses with user information:

- `username` — user name
- `tag` — tag in a social network without `@'
- `location' — city and country
- `avatar' — link to the image
- `stats' — object with activity information

The component should create a DOM element of the following structure.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

## Usage example

```js
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```
