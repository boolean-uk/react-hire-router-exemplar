import { useState, useEffect } from "react"

import { Routes, Route, Link } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { PersonProfile } from './pages/PersonProfile'

import { api, UIText, Paths } from './utils/vars'

import './styles/styles.css'

export const App = () => {

  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([]) 

  useEffect(() => {

      //console.log('fetching data')
      fetch(`${api}/?results=50`)
        .then(res => res.json())
        .then(data => {
          //console.log('my data', data.results)
          setPeople(data.results)
        })

  }, [])

  return (
    <>
      <header>
        <h1>{UIText.appHeading}</h1>
        <nav>
          <ul>
            <li>
              <Link to={Paths.home}>{UIText.appDashboard}</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path={Paths.home} element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path={Paths.person} element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>

    </>
  )
}
