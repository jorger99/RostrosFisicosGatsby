import React from "react"
import Header from "../components/header" // highlight-line
import { Link } from "gatsby" // highlight-line


export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerTexts="About Gatsby" />  {/* highlight-line */}
      <p>Such wow. Very React.</p>
    </div>
  )
}
