import React from "react"
import Header from "../components/header" // highlight-line
import { Link } from "gatsby" // highlight-line

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}
