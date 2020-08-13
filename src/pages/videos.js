import React from "react"
import Header from "../components/header"
import PageLayout from "../components/pagelayout.js"

import { Link } from "gatsby"

export default function People() {
  return (
    <PageLayout>
      <Header headerText="Videos" />
      <p>Here is a list of our videos</p>
    </PageLayout>
  )
}