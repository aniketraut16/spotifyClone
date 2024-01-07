import React from "react";
import {
  ChevronRight,
  ChevronLeft,
  Bell,
  User,
  ArrowDownCircle,
  Clock,
  Play,
} from "lucide-react";
import Playlisticon from "../Images/playlistLogo.png";
import "./Playlist.css";
function Playlist(props) {
  const { id } = props;
  function formatDate(input) {
    if (!(input instanceof Date)) {
      input = new Date(input);
    }

    const day = String(input.getDate()).padStart(2, "0");
    const monthAbbreviation = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(input);
    const year = input.getFullYear();

    return `${day} ${monthAbbreviation} ${year}`;
  }
  const data = {
    title: "Aniket Raut's Liked Songs",
    description: "Its Anikets Favorite Songs",
    songs: [
      {
        _id: "659584e60919c80fea385921",
        title: "Shape of You",
        singer: "Ed Sheeran",
        album: "÷ (Divide)",
        duration: 233,
        genre: "Pop",
        releaseDate: "2017-01-06T00:00:00.000Z",
        lyrics: "The club isn't the best place to find a lover...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385924",
        title: "Despacito",
        singer: "Luis Fonsi, Daddy Yankee",
        album: "Vida",
        duration: 228,
        genre: "Reggaeton",
        releaseDate: "2017-01-12T00:00:00.000Z",
        lyrics: "Despacito, quiero respirar tu cuello despacito...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385931",
        title: "Counting Stars",
        singer: "OneRepublic",
        album: "Native",
        duration: 257,
        genre: "Pop",
        releaseDate: "2013-06-14T00:00:00.000Z",
        lyrics: "Lately, I've been, I've been losing sleep...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385935",
        title: "Tum Hi Ho",
        singer: "Arijit Singh",
        album: "Aashiqui 2",
        duration: 266,
        genre: "Bollywood",
        releaseDate: "2013-04-04T00:00:00.000Z",
        lyrics: "Tum hi ho, ab tum hi ho...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385939",
        title: "Raabta",
        singer: "Arijit Singh, Nikhita Gandhi",
        album: "Raabta",
        duration: 303,
        genre: "Bollywood",
        releaseDate: "2017-04-27T00:00:00.000Z",
        lyrics: "Kehte hain khuda ne iss jahan mein...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea38593e",
        title: "Sun Saathiya",
        singer: "Priya Saraiya, Divya Kumar",
        album: "ABCD 2",
        duration: 220,
        genre: "Bollywood",
        releaseDate: "2015-05-08T00:00:00.000Z",
        lyrics: "Sun saathiya mahiya, barsa de ishqa ki syahiyaan...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385940",
        title: "Ae Dil Hai Mushkil",
        singer: "Arijit Singh",
        album: "Ae Dil Hai Mushkil",
        duration: 358,
        genre: "Bollywood",
        releaseDate: "2016-09-06T00:00:00.000Z",
        lyrics: "Tu safar mera, hai tu hi meri manzil...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385945",
        title: "Kabira",
        singer: "Tochi Raina, Rekha Bhardwaj",
        album: "Yeh Jawaani Hai Deewani",
        duration: 231,
        genre: "Bollywood",
        releaseDate: "2013-04-09T00:00:00.000Z",
        lyrics: "Kabira maan ja, kabira maan ja...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385921",
        title: "Shape of You",
        singer: "Ed Sheeran",
        album: "÷ (Divide)",
        duration: 233,
        genre: "Pop",
        releaseDate: "2017-01-06T00:00:00.000Z",
        lyrics: "The club isn't the best place to find a lover...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385924",
        title: "Despacito",
        singer: "Luis Fonsi, Daddy Yankee",
        album: "Vida",
        duration: 228,
        genre: "Reggaeton",
        releaseDate: "2017-01-12T00:00:00.000Z",
        lyrics: "Despacito, quiero respirar tu cuello despacito...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385931",
        title: "Counting Stars",
        singer: "OneRepublic",
        album: "Native",
        duration: 257,
        genre: "Pop",
        releaseDate: "2013-06-14T00:00:00.000Z",
        lyrics: "Lately, I've been, I've been losing sleep...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385935",
        title: "Tum Hi Ho",
        singer: "Arijit Singh",
        album: "Aashiqui 2",
        duration: 266,
        genre: "Bollywood",
        releaseDate: "2013-04-04T00:00:00.000Z",
        lyrics: "Tum hi ho, ab tum hi ho...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385939",
        title: "Raabta",
        singer: "Arijit Singh, Nikhita Gandhi",
        album: "Raabta",
        duration: 303,
        genre: "Bollywood",
        releaseDate: "2017-04-27T00:00:00.000Z",
        lyrics: "Kehte hain khuda ne iss jahan mein...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea38593e",
        title: "Sun Saathiya",
        singer: "Priya Saraiya, Divya Kumar",
        album: "ABCD 2",
        duration: 220,
        genre: "Bollywood",
        releaseDate: "2015-05-08T00:00:00.000Z",
        lyrics: "Sun saathiya mahiya, barsa de ishqa ki syahiyaan...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385940",
        title: "Ae Dil Hai Mushkil",
        singer: "Arijit Singh",
        album: "Ae Dil Hai Mushkil",
        duration: 358,
        genre: "Bollywood",
        releaseDate: "2016-09-06T00:00:00.000Z",
        lyrics: "Tu safar mera, hai tu hi meri manzil...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385945",
        title: "Kabira",
        singer: "Tochi Raina, Rekha Bhardwaj",
        album: "Yeh Jawaani Hai Deewani",
        duration: 231,
        genre: "Bollywood",
        releaseDate: "2013-04-09T00:00:00.000Z",
        lyrics: "Kabira maan ja, kabira maan ja...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385921",
        title: "Shape of You",
        singer: "Ed Sheeran",
        album: "÷ (Divide)",
        duration: 233,
        genre: "Pop",
        releaseDate: "2017-01-06T00:00:00.000Z",
        lyrics: "The club isn't the best place to find a lover...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385924",
        title: "Despacito",
        singer: "Luis Fonsi, Daddy Yankee",
        album: "Vida",
        duration: 228,
        genre: "Reggaeton",
        releaseDate: "2017-01-12T00:00:00.000Z",
        lyrics: "Despacito, quiero respirar tu cuello despacito...",
        isExplicit: false,
      },
      {
        _id: "659584e60919c80fea385931",
        title: "Counting Stars",
        singer: "OneRepublic",
        album: "Native",
        duration: 257,
        genre: "Pop",
        releaseDate: "2013-06-14T00:00:00.000Z",
        lyrics: "Lately, I've been, I've been losing sleep...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385935",
        title: "Tum Hi Ho",
        singer: "Arijit Singh",
        album: "Aashiqui 2",
        duration: 266,
        genre: "Bollywood",
        releaseDate: "2013-04-04T00:00:00.000Z",
        lyrics: "Tum hi ho, ab tum hi ho...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385939",
        title: "Raabta",
        singer: "Arijit Singh, Nikhita Gandhi",
        album: "Raabta",
        duration: 303,
        genre: "Bollywood",
        releaseDate: "2017-04-27T00:00:00.000Z",
        lyrics: "Kehte hain khuda ne iss jahan mein...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea38593e",
        title: "Sun Saathiya",
        singer: "Priya Saraiya, Divya Kumar",
        album: "ABCD 2",
        duration: 220,
        genre: "Bollywood",
        releaseDate: "2015-05-08T00:00:00.000Z",
        lyrics: "Sun saathiya mahiya, barsa de ishqa ki syahiyaan...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385940",
        title: "Ae Dil Hai Mushkil",
        singer: "Arijit Singh",
        album: "Ae Dil Hai Mushkil",
        duration: 358,
        genre: "Bollywood",
        releaseDate: "2016-09-06T00:00:00.000Z",
        lyrics: "Tu safar mera, hai tu hi meri manzil...",
        isExplicit: false,
      },
      {
        _id: "659585990919c80fea385945",
        title: "Kabira",
        singer: "Tochi Raina, Rekha Bhardwaj",
        album: "Yeh Jawaani Hai Deewani",
        duration: 231,
        genre: "Bollywood",
        releaseDate: "2013-04-09T00:00:00.000Z",
        lyrics: "Kabira maan ja, kabira maan ja...",
        isExplicit: false,
      },
    ],
  };
  var totalDuration = 0;
  for (const song of data.songs) {
    totalDuration += song.duration;
  }
  return (
    <div id="playlist">
      <div id="playlist-intro">
        <div id="playlist-intro-menu">
          <ChevronLeft />
          <ChevronRight className="arrow-btns" />
          <a href="#">Explore Preminum</a>
          <a href="#">
            <ArrowDownCircle /> Install App
          </a>
          <Bell />
          <User />
        </div>
        <div id="playlist-info">
          <img src={Playlisticon} alt="" />
          <div>
            <p>Playlist</p>
            <h1>
              {data.title.includes("Liked Songs") ? "Liked Songs" : data.title}
            </h1>
            <p>
              aniket{" \u2022 "}
              {`${data.songs.length} songs , about ${Math.floor(
                totalDuration / 3600
              )} hr ${totalDuration % 60} min`}
            </p>
          </div>
        </div>
      </div>
      <div id="playlist-play-options">
        <div id="playlist-play-options-playbtn">
          <Play />
        </div>
      </div>
      <div id="playlist-songs-list">
        <div id="playlist-songs-list-heading">
          <div className="playlist-songs-list-index">#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Date added</div>
          <div></div>
          <div>
            <Clock />
          </div>
        </div>
        {data.songs.map((song, index) => (
          <div key={index}>
            <div className="playlist-songs-list-index">{index + 1}</div>
            <div className="playlist-songs-list-title">
              <img src={Playlisticon} alt="" />
              <div>
                <span>{song.title}</span>
                <p>{song.singer}</p>
              </div>
            </div>
            <div>{song.album}</div>
            <div>{formatDate(song.releaseDate)}</div>
            <div></div>
            <div>
              {`${Math.floor(song.duration / 60)}:${song.duration % 60}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
