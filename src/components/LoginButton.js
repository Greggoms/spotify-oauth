import React from "react"
import { v4 as uuid } from "uuid"

// All this does is render a link to initiate the auth flow.
// It includes a lot of parameters, some ~optional~.
const LoginButton = () => {
  const baseUri = "https://accounts.spotify.com/authorize"
  const clientId = process.env.CLIENT_ID
  const responseType = "code"
  const redirectUri = "http://localhost:8000/app"
  const state = uuid()
  const scope =
    "user-read-currently-playing user-read-playback-state user-read-recently-played user-read-playback-position user-top-read"

  const fullUrl = `${baseUri}?response_type=${responseType}&redirect_uri=${redirectUri}&client_id=${clientId}&state=${state}&scope=${scope}`

  return (
    <a href={fullUrl} className="login-btn">
      Login with Spotify
    </a>
  )
}

export default LoginButton
