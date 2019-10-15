import React, { useState, useEffect } from 'react'
import fetchData, { pageList } from '../fetchData'
import { Route, Link } from 'react-router-dom'

export default function FetchingDataExample() {
  return (
    <div>
      <h2>Pick a page!</h2>
      <nav className="nav">
        { pageList.map(page => <Link key={page} className="nav__link" to={`/fetching/pages/${page}`}>{page.toUpperCase()}</Link>) }
      </nav>
      <Route path="/fetching/pages" render={({location}) => <Page pathname={location.pathname}/> }/>
    </div>
  )
}

function Page({ pathname }) {
  const [pageData, setPageData] = useState()
  const [fetching, setFetching] = useState(false)
  const page = pathname.split('pages/')[1]
  useEffect(() => {
    setFetching(true)
    fetchData(page).then(data => {
      setPageData(data)
      setFetching(false)
    })
  }, [page])

  const pageUI = pageData
  ? (
    <section className="page">
      <h3>{pageData.title}</h3>
      <p>{pageData.content}</p>
    </section>
  ) : null
  const fetchUI = fetching && <p>Loading...</p>

  return fetchUI || pageUI
}