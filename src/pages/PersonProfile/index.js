import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { HireForm } from './components/HireForm'

import { UIText } from '../../utils/vars'

export const PersonProfile = ({hiredPeople, setHiredPeople}) => {
  const [person, setPerson] = useState(null)
  const [makeOffer, setMakeOffer] = useState(false)

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
          <p>{UIText.personAge}{person.dob.age}</p>            
          <p>{UIText.personEmail}{person.email}</p>

          {person.wage && (
            <p>{UIText.personWage}{person.wage}</p>
          )}

          { makeOffer ? (

            <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />

          ) : (

          <button onClick={() => setMakeOffer(true)}>
              Make Offer
          </button>

          )}

        </>
        
      ) : (

        <p>{UIText.peopleNone}</p>
      )}
    </>
  )
}
