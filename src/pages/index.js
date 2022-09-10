import React from "react"
import LoginButton from "../components/LoginButton"
import { HomepageContainer } from "../css"

const Home = () => {
  return (
    <HomepageContainer>
      <h1>Spotify OAuth2 Testing</h1>

      <LoginButton />
    </HomepageContainer>
  )
}

export default Home
