import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import HireForm from "./components/HireForm"

import { UIText } from '../../utils/vars'

function PersonProfile({hiredPeople, setHiredPeople}) {
  const [person, setPerson] = useState(null)

  const location = useLocation()

  useEffect(() => {
    if (!location.state) return
    const personData = location.state.person
    setPerson(personData)
  }, [location])

  return (
    <>
      { person ? (

        <>
          <h2>
            {person.name.first} {person.name.last}
          </h2>
          <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
        </>
        
      ) : (

        <p>{UIText.peopleNone}</p>
      )}
    </>
  )
}

export default PersonProfile
