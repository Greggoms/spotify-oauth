import React, { useState, useEffect } from "react"

// This is what happens immediately after being
// redirected from spotify's auth login process.
//
// I believe I have followed the docs to a T, but
// I can't seem to find the issue. Everyone seems
// to be using express, but is it really necessary?
const OAuthRedirect = ({ location }) => {
  const baseUri = "https://accounts.spotify.com/api/token"
  const redirectUri = "http://localhost:8000/app"

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  // This stores the code=${code} URL param returned when the
  // user logs in with spotify.
  const params = new URLSearchParams(location.search)
  const code = params.get("code")

  const [spotifyKeys, setSpotifyKeys] = useState()
  const [spotifyData, setSpotifyData] = useState()

  useEffect(() => {
    fetch(baseUri, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        )}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSpotifyKeys(data)
      })
      .catch(err => console.error(err))
  }, [code])

  const getCurrentlyPlaying = () => {
    fetch(
      "https://api.spotify.com/v1/me/player/recently-played?additional_types=track&market=US",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${spotifyKeys.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSpotifyData(data)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>{spotifyKeys ? `Welcome` : `You are being authenticated...`}</h1>
      <div>{spotifyKeys?.access_token}</div>
      <button onClick={() => getCurrentlyPlaying()}>Get Current Track</button>

      <ul>
        {!spotifyData
          ? `No Data`
          : spotifyData.items.map(({ track }) => (
              <li key={track.id}>{track.name}</li>
            ))}
      </ul>
    </div>
  )
}

export default OAuthRedirect
