import React from "react"
import { Router } from "@reach/router"
import OAuthRedirect from "../components/OAuthRedirect"

const App = () => {
  return (
    <Router>
      <OAuthRedirect path="/app" />
    </Router>
  )
}

export default App
