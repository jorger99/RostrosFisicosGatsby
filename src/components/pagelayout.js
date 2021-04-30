import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function PageLayout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem` }}>

    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h2 style={{ display: `inline` }}> Rostros Fisicos</h2>
      </Link>

      <ul style={{ listStyle: `none`, float: `right`, color: 'black' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/people/">Team</ListLink>
        <ListLink to="/videos/">Videos</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

      {children}
    </div>
  )
}
