# Music Player App Backend API Documentation

Welcome to the documentation for the Music Player App Backend API. This API serves as the backend for our music player application, providing various endpoints to manage users, playlists, and songs.

## User Routes

### 1. User Login

#### Route

`POST /backend/user/login`

#### Request

```json
{
  "name": "user_name",
  "email": "user_email@example.com",
  "password": "user_password"
}
```

#### Response

```json
{
  "user": {
    "name": "user_name",
    "email": "user_email@example.com"
  },
  "token": "generated_token"
}
```

### 2. Create User

#### Route

`POST /backend/user/createuser`

#### Request

```json
{
  "email": "user_email@example.com",
  "password": "user_password"
}
```

#### Response

```json
{
  "user": {
    "email": "user_email@example.com"
  },
  "token": "generated_token"
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

#### Response

```json
{
  "message": "Playlist Successfully Created",
  "id": "new_playlist_id"
}
```

### 2. Add Song to Playlist

#### Route

`PUT /backend/playlists/addsongtoplaylist`

#### Request

```json
{
  "title": "My Playlist",
  "songid": "song_id"
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
  "songid": "song_id"
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
  "newTitle": "New Playlist Title"
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

#### Request

```json
{}
```

#### Response

```json
{
  "dataobj": {
    // ... playlist details
  }
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

Feel free to explore and use the provided routes to build a feature-rich music player application!
