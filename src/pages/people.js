import React from "react"
import Header from "../components/header" // highlight-line
import { Link } from "gatsby" // highlight-line

export default function People() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="People" />
      <p>Here is a list of our members</p>
    </div>
  )
}
