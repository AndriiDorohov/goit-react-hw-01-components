# Social Network Profile

It is necessary to create a component `<Profile>`, with which we could display
information about the user of the social network. User data is stored in the
[user.json](./user.json) file.

<div align="center">
    <img src="https://github.com/AndriiDorohov/goit-react-hw-01-components/blob/main/preview.png"/>
</div>

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

# Statistics Section

Create a component `<Statistics>` that would display statistics on the transmitted
prop. For example, uploads to the cloud by file type, web page visits
by users from different countries, financial expenses, etc. Statistics data are
in the file [data.json](./data.json).

<div align="center">
    <img src="https://github.com/AndriiDorohov/goit-react-hw-01-components/blob/main/preview.jpg"/>
</div>

## Description of the component

The component must accept two passes `title` and `stats`, which specify
the title and the statistics object.

- `title` is optional, and if it is not passed, the markup should not be rendered
the header `<h2>`.
- `stats` - an array of objects containing information about the statistics element. Can
have an arbitrary number of elements.
- You can skip the background color of the statistics element in the design, or create
a function to generate a random color.

The component should create a DOM element of the following structure.

```html
<section class="statistics">
<h2 class="title">Upload stats</h2>

<ul class="stat-list">
<li class="item">
<span class="label">.docx</span>
<span class="percentage">4%</span>
</li>
<li class="item">
<span class="label">.mp3</span>
<span class="percentage">14%</span>
</li>
<li class="item">
<span class="label">.pdf</span>
<span class="percentage">41%</span>
</li>
<li class="item">
<span class="label">.mp4</span>
<span class="percentage">12%</span>
</li>
</ul>
</section>
```

## Usage example

```js
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
```

# Friends list

It is necessary to create a component `<FriendList>`, with which we could
display information about the user's friends. Information about friends is stored in
the [friends.json](./friends.json).

<div align="center">
    <img src="https://github.com/AndriiDorohov/goit-react-hw-01-components/blob/main/preview2.jpg"/>
</div>

## Description of the `<FriendList>` component

The component must accept a single `friends` prop - an array of friends objects.

The component should create a DOM of the following structure.

```html
<ul class="friend-list">
<!-- Arbitrary number of FriendListItem -->
</ul>
```

## Description of the `<FriendListItem>` component

The component must accept multiple props:

- `avatar' - link to the avatar
- `name` - friend's name
- `isOnline` - a bul signaling the status of a friend, online or not.

Depending on the prop `isOnline`, the background color `span.status` should change. This
can be done through a different CSS class or Styled Components.

The component should create a DOM of the following structure.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

## Usage example

```js
import friends from 'path/to/friends.json';

<FriendList friends={friends} />,
```


# Transaction History

It is necessary to create a transaction history component in the personal account of the Internet
bank.

<div align="center">
    <img src="https://github.com/AndriiDorohov/goit-react-hw-01-components/blob/main/preview3.jpg"/>
</div>

The data for the list is available in JSON format in a file
[transactions.json](./transactions.json). This is an array of objects, each object
describes one transaction with the following properties:

- `id' — unique transaction ID
- `type' — transaction type
- `amount` - transaction amount
- `currency' - currency type

## Description of the `<TransactionHistory>` component

It is necessary to create a component `<TransactionHistory>` that accepts one prop
`items` is an array of transaction objects from 'transactions.json`. The component creates
a table layout. Each transaction is a row of a table. The example shows
the markup of two transactions.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

## Usage example

```js
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```
