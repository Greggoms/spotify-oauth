import { navigate } from "gatsby"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, selectAuth } from "../app-redux/features/authSlice"

// This is what happens immediately after being
// redirected from spotify's auth login process.
const OAuthRedirect = ({ location }) => {
  // to store keys in redux
  const dispatch = useDispatch()
  const userAuth = useSelector(selectAuth)

  const baseUri = "https://accounts.spotify.com/api/token"
  const redirectUri = "http://localhost:8000/app"

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  // This stores the code=${code} URL param returned when the
  // user logs in with spotify.
  const params = new URLSearchParams(location.search)
  const code = params.get("code")

  // Retreieve an access_token once you hit the redirect_uri
  if (code && !userAuth) {
    try {
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
          dispatch(login(data))
          navigate("/")
        })
        .catch(err => console.error(err))
    } catch (err) {
      console.error(err)
    }
  } else if (userAuth) {
    navigate("/")
  }

  return (
    <div>
      <h1>You are being authenticated...</h1>
    </div>
  )
}

export default OAuthRedirect
