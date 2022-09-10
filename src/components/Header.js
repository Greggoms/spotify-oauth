import { Link } from "gatsby"
import React from "react"
import { HeaderContainer } from "../css"

const Header = () => {
  return (
    <HeaderContainer>
      <div className="content">
        <Link to="/">header</Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
