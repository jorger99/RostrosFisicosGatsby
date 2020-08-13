import React from "react"
import Header from "../components/header"
import PageLayout from "../components/pagelayout"

import { Link } from "gatsby"

export default function Contact() {
  return (
    <PageLayout>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </PageLayout>
  )
}
