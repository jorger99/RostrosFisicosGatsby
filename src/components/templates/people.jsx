import React from "react"

import Header from "../header"
import "../css/person_layout.css"
import "../styles/global.css"


const Layout = props => {
  const {
    pageContext: {FirstName, LastName, DateOfBirth, Biography},
  } = props

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
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

        <div class="w-layout-grid grid">
          <img src="src/images/blank-person.png" width="250" height="250" alt="Test"></img>
        </div>

        </main>
      </div>
    </>
  )
}
export default Layout
