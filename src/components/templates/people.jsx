import React from "react"
import PageLayout from "../pagelayout.js"
import PersonCSS from "../css/personcss.css"

const Layout = props => {
  const {
    pageContext: {FirstName, LastName, DateOfBirth, Biography},
  } = props

  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 900,
          padding: `0 1rem`,
          paddingTop: '0',
        }}
      >
        <main>

        <h1>
          {FirstName} {LastName}
        </h1>

        <div class='flex-container'>
          <div class="half-column">
            <ul list-style-type= "circle">
              <li>Birthday: {DateOfBirth}</li>
              <li>Location: {FirstName} </li>
              <li> {Biography} </li>
            </ul>
          </div>

          <div class="half-column">
            <img src="blank.png" width="250" height="250" alt="Person"></img>
          </div>

          <div id="clear"></div>
        </div>


        <h2> Found in these galleries: </h2>

        <div class="flex-container">
          <img src="blank.png" class="flex-item" width="250" height="250" alt="Test1"></img>
          <img src="src/images/blank.png" class="flex-item" width="250" height="250" alt="Test3"></img>
          <img src="src/images/blank.png" class="flex-item" width="250" height="250" alt="Test3"></img>
          <img src="src/images/blank.png" class="flex-item" width="250" height="250" alt="Test3"></img>
        </div>

        </main>
      </div>

    </>
  )
}
export default Layout
