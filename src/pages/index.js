import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Link to="/people/">People</Link>
      <br />
      <Link to="/videos/">Videos</Link>
      <br />
      <Link to="/about/">About</Link>
      <br />
      <Link to="/contact/">Contact</Link>
      <br />

      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
