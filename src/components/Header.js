import { Link } from "gatsby"
import React from "react"
import { HeaderContainer } from "../css"

const Header = () => {
  return (
    <HeaderContainer>
      <div className="content">
        <h1>
          <Link to="/">spotify-oauth</Link>
        </h1>
      </div>
    </HeaderContainer>
  )
}

export default Header
