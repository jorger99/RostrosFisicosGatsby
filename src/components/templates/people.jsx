import React from "react"
import Header from "../header"


const Layout = props => {
  const {
    pageContext: {FirstName, LastName, DateOfBirth, Biography},
  } = props

  return (
    <>
      <Header />

      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 900,
          padding: `0 1rem`,
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
          <img src="blank.png" width="250" height="250" alt="Test"></img>
          <img src="src/images/blank.png" width="250" height="250" alt="Test"></img>
          <img src="src/images/blank.png" width="250" height="250" alt="Test"></img>
          <img src="src/images/blank.png" width="250" height="250" alt="Test"></img>
        </div>

        </main>
      </div>
    </>
  )
}
export default Layout
