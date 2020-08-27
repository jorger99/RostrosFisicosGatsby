import React from "react"
import Header from "../components/header"
import PageLayout from "../components/pagelayout.js"

import { Link } from "gatsby"

var test_var ;
var num_var ;


export default function People() {

  test_var = "word" ;
  num_var = 3 ;

  return (
    <PageLayout>
      <Header headerText="People" />
      <p>Here is a list of our members</p>
      <p> {test_var} </p>
      <p> {num_var} </p>
    </PageLayout>
  )
}
