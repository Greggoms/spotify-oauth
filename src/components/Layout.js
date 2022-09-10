import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "./Header"
import Footer from "./Footer"
import { LayoutContainer } from "../css"

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <LayoutContainer>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <div className="main-content">
          <main>{children}</main>
        </div>
        <Footer />
      </LayoutContainer>
    </HelmetProvider>
  )
}

export default Layout
