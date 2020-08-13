import React from "react"
import Header from "../components/header"
import PageLayout from "../components/pagelayout"

import { Link } from "gatsby"


export default function About() {
  return (
    <PageLayout>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
    </PageLayout>
  )
}
