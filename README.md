# Spotify Clone Backend API Documentation

Welcome to the documentation for the  Spotify Clone Backend API. This API serves as the backend for our Spotify Clone, providing various endpoints to manage users, playlists, and songs.

## User Routes

### 1. User Creating

#### Route

`POST /backend/user/createuser`

#### Request

```json
{
  "name": "Test User",
  "email": "user_email@example.com",
  "password": "abc123"
}
```

#### Response

```json
{
  "user": {
    "name": "Test User",
    "email": "user_email@example.com",
    "hashedPassword": "$2a$10$m4ztsrXcOaAsX.E57zHvy.CPtU6m5AaerkfsgCSa0lx.0/F1Uhz92",
    "isPremium": false,
    "isCreater": false,
    "favoriteGenres": [],
    "playlists": ["65885cc549ead0aced78ed39"],
    "_id": "65885cc549ead0aced78ed36",
    "__v": 1
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTQ2MX0.BlrrbrlZFldICHGvAtY1FCZQ8yuqr3O44THwUDBkQKg"
}
```

### 2. User Login

#### Route

`POST /backend/user/login`

#### Request

```json
{
  "email": "user_email@example.com",
  "password": "abc123"
}
```

#### Response

```json
{
  "user": {
    "_id": "65885cc549ead0aced78ed36",
    "name": "Test User",
    "email": "user_email@example.com",
    "hashedPassword": "$2a$10$m4ztsrXcOaAsX.E57zHvy.CPtU6m5AaerkfsgCSa0lx.0/F1Uhz92",
    "isPremium": false,
    "isCreater": false,
    "favoriteGenres": [],
    "playlists": ["65885cc549ead0aced78ed39"],
    "__v": 1
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTU3MX0.0mrIcSDW_ikf81FnK999sCasD5DMuLsu5ywa4fFvbxw"
}
```

## Playlist Routes

### 1. Create Playlist

#### Route

`POST /backend/playlists/createplaylist`

#### Request

```json
{
  "title": "My Playlist",
  "description": "A cool playlist"
}
```

#### Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTU3MX0.0mrIcSDW_ikf81FnK999sCasD5DMuLsu5ywa4fFvbxw"
}
```

#### Response

```json
{
  "message": "Playlist Successfully Created",
  "id": "65885eaf49ead0aced78ed3e"
}
```

### 2. Add Song to Playlist

#### Route

`PUT /backend/playlists/addsongtoplaylist`

#### Request

```json
{
  "title": "My Playlist",
  "songid": "657f8c07d77be724f4c4901b"
}
```

#### Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTU3MX0.0mrIcSDW_ikf81FnK999sCasD5DMuLsu5ywa4fFvbxw"
}
```

#### Response

```json
{
  "message": "Song Added Successfully"
}
```

### 3. Delete Song from Playlist

#### Route

`PUT /backend/playlists/deletesongfromplaylist`

#### Request

```json
{
  "title": "My Playlist",
  "songid": "657f8c07d77be724f4c4901b"
}
```

#### Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTU3MX0.0mrIcSDW_ikf81FnK999sCasD5DMuLsu5ywa4fFvbxw"
}
```

#### Response

```json
{
  "message": "Song Deleted from Playlist Successfully"
}
```

### 4. Change Playlist Title

#### Route

`PUT /backend/playlists/changeplaylisttitle`

#### Request

```json
{
  "currentTitle": "My Playlist",
  "newTitle": "My New Playlist "
}
```

#### Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTU3MX0.0mrIcSDW_ikf81FnK999sCasD5DMuLsu5ywa4fFvbxw"
}
```

#### Response

```json
{
  "message": "Playlist Title Updated Successfully"
}
```

### 5. Playlist Details

#### Route

`GET /backend/playlists/playlistdetails/:title`
For Eg. `/backend/playlists/playlistdetails/My New Playlist `

#### Request

```json
{}
```

#### Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODg1Y2M1NDllYWQwYWNlZDc4ZWQzNiIsImlhdCI6MTcwMzQzNTU3MX0.0mrIcSDW_ikf81FnK999sCasD5DMuLsu5ywa4fFvbxw"
}
```

#### Response

```json
{
  "title": "My New Playlist ",
  "songs": [
    {
      "isExplicit": false,
      "_id": "657f8c07d77be724f4c4901b",
      "title": "Blinding Lights",
      "singer": "The Weeknd",
      "album": "After Hours",
      "duration": 207,
      "__v": 0
    },
    {
      "isExplicit": false,
      "_id": "657f8c15d77be724f4c4901e",
      "title": "Levitating",
      "singer": "Dua Lipa",
      "album": "Future Nostalgia",
      "duration": 203,
      "__v": 0
    },
    {
      "isExplicit": false,
      "_id": "657f8c6ad77be724f4c49028",
      "title": "Montero (Call Me By Your Name)",
      "singer": "Lil Nas X",
      "album": "Montero",
      "duration": 181,
      "__v": 0
    }
  ]
}
```

## Songs Routes

### 1. Add Song

#### Route

`POST /backend/songs/addsong`

#### Request

```json
{
  "title": "Song Title",
  "singer": "Singer Name",
  "album": "Album Name",
  "duration": "Duration in seconds",
  "genre": "Genre",
  "releaseDate": "Release Date",
  "lyrics": "Song Lyrics",
  "isExplicit": true
}
```

#### Response

```json
{
  "message": "Song successfully added"
}
```

### 2. Update Song

#### Route

`PUT /backend/songs/updatesong`

#### Request

```json
{
  "title": "Updated Song Title",
  "singer": "Updated Singer Name",
  "album": "Updated Album Name",
  "duration": "Updated Duration in seconds",
  "genre": "Updated Genre",
  "releaseDate": "Updated Release Date",
  "lyrics": "Updated Song Lyrics",
  "isExplicit": false
}
```

#### Response

```json
{
  "message": "Song updated successfully"
}
```

### 3. Show Songs

#### Route

`GET /backend/songs/showsong/:part`

#### Request

```json
{}
```

#### Response

```json
{
  "matchingSongs": [
    // ... list of songs matching the criteria
  ]
}
```

### 4. Delete Song

#### Route

`DELETE /backend/songs/deletesong/:id`

#### Request

```json
{}
```

#### Response

```json
{
  "message": "Song deleted successfully"
}
```

## General Information

- **Security:** Ensure to handle user authentication and authorization securely.
- **Error Handling:** Implement robust error handling mechanisms.
- **Consistent Response Structure:** Strive for consistency in response structures.
- **Validation:** Validate incoming requests to ensure data integrity.
- **Documentation:** For more details, refer to the API documentation.

Feel free to explore and use the provided routes to build a feature-rich app!
