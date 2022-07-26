import { Routes, Route } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import PersonProfileEdit from './pages/PersonProfile/components/PersonProfileEdit'

export const Navigation = (props) => {

  const { setHiredPeople, hiredPeople } = props

  return (
    <> 
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/people/:id' element={
          <PersonProfile
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople}
          />
        }/>
        <Route path='/people/:id/edit' element={
          <PersonProfileEdit
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople}
          />
        }/>
      </Routes>
    </>
  )
}
