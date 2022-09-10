import React from "react"
import { useSelector } from "react-redux"
import { selectAuth } from "../app-redux/features/authSlice"
import Api from "../components/Api"
import LoginButton from "../components/LoginButton"
import { HomepageContainer } from "../css"

const Home = () => {
  const userAuth = useSelector(selectAuth)

  if (!userAuth) {
    return (
      <HomepageContainer>
        <div className="login">
          <h2>Login to test the API</h2>
          <LoginButton />
        </div>
      </HomepageContainer>
    )
  } else {
    return (
      <HomepageContainer>
        <Api />
      </HomepageContainer>
    )
  }
}

export default Home
