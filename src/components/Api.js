import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectAuth } from "../app-redux/features/authSlice"
import { Button, ResponseContainer } from "../css"

const Api = () => {
  const userAuth = useSelector(selectAuth)
  const [recentlyPlayed, setRecentlyPlayed] = useState()
  const [currentSong, setCurrentSong] = useState()

  const getRecentlyPlayed = () => {
    fetch(
      "https://api.spotify.com/v1/me/player/recently-played?additional_types=track&market=US",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userAuth.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        setRecentlyPlayed(data.items)
      })
      .catch(err => console.error(err))
  }

  const getCurrentlyPlaying = () => {
    fetch(
      "https://api.spotify.com/v1/me/player?additional_types=track&market=US",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userAuth.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.item)
        setCurrentSong(data.item)
      })
      .catch(err => console.error(err))
  }

  return (
    <ResponseContainer>
      <aside>
        <Button onClick={() => getCurrentlyPlaying()}>Get Current Song</Button>
        <Button onClick={() => getRecentlyPlayed()}>Get Recently Played</Button>
      </aside>
      <div className="response-content">
        {currentSong && (
          <div className="current-song">
            <img
              src={currentSong.album.images[1].url}
              alt={currentSong.album.name}
            />
            <div className="current-song__info">
              <h2>{currentSong.name}</h2>
              <div className="artist">
                <span>Artist(s)</span>
                <ul>
                  {currentSong.artists.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
              <div className="album">
                <span>Album</span>
                <p>{currentSong.album.name}</p>
              </div>
            </div>
          </div>
        )}
        <div className="recently-played">
          {recentlyPlayed && (
            <ul>
              {recentlyPlayed &&
                recentlyPlayed.map(({ track }) => (
                  <li key={track.id}>{track.name}</li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </ResponseContainer>
  )
}

export default Api
