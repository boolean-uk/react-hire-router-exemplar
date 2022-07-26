import { useState, useEffect } from "react"

import { Routes, Route, Link } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import PersonProfileEdit from './pages/PersonProfile/components/PersonProfileEdit'

import { api } from './utils/vars'

import './styles/styles.css'

export default function App() {

  const [people, setPeople] = useState([]) 

  useEffect(() => {

      //console.log('fetching data')
      fetch(`${api}/?results=50`)
        .then(res => res.json())
        .then(data => {
          //console.log('my data', data)
          setPeople(data.results)
        })
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard people={people} />} />
        <Route path='/people/:id' element={<PersonProfile />} />
        <Route path='/people/:id/edit' element={<PersonProfileEdit /> }/>
      </Routes>
    </>
  )
}
