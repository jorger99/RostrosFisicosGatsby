import React from "react"

import Header from "../header"
import "../layout.css"

const Layout = props => {
  const {
    pageContext: {FirstName, LastName, DateOfBirth, Biography },
  } = props

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <h1>
            {FirstName} {LastName}
          </h1>
          <p>Age: {DateOfBirth}</p>
          <p>Location: {FirstName} </p>
          <p> {Biography} </p>

        </main>
      </div>
    </>
  )
}
export default Layout
