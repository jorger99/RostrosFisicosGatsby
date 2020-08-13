import React from "react"
import Header from "../components/header"
import PageLayout from "../components/pagelayout"

import { Link } from "gatsby"

export default function Home() {
  //
  return (
    <PageLayout>

      <h1>Hello Everyone!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </PageLayout>
  )
}
