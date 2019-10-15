import React, { useState, useEffect } from 'react'
import fetchData, { pageList } from '../fetchData'
import { Route, Link } from 'react-router-dom'

export default function FetchingDataExample() {
  // TODO: Alright, here's the final test!
  // Let's update our Page component to fetch page data based on the current route!
  return (
    <div>
      <h2>Pick a page!</h2>
      <nav className="nav">
        { pageList.map(page => <Link key={page} className="nav__link" to={`/fetching/pages/${page}`}>{page.toUpperCase()}</Link>) }
      </nav>
      <Route path="/fetching/pages" render={({location}) => (
        <Page page={location.pathname.split('pages/')[1]}/>
      )}/>
    </div>
  )
}

function Page({ page }) {
  // TODO: Lets track two things: the pageData for the current page after we fetched it 
  // and a fetching state so we can update our UI while we're fetching new data.

  // Replace these!
  const pageData = null
  const fetching = false

  const pageUI = pageData
  ? <PageUI {...pageData} /> : null
  const fetchUI = fetching && <p>Loading...</p>

  return fetchUI || pageUI
}

function PageUI({ title, content }) {
  return (
    <section className="page">
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  );
}