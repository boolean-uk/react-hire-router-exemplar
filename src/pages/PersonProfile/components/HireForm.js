import { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom'

import { UIText, Paths } from '../../../utils/vars'

export const HireForm = ({hiredPeople, setHiredPeople}) => {
  const [person, setPerson] = useState(null)
  const [wage, setWage] = useState(0)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state) return
    const personData = location.state.person
    setPerson(personData)
    setWage(personData.wage)
  }, [location])

  const handleSubmit = (event) => {
    event.preventDefault()

    const thisPerson = {...person, wage: wage ? wage : 0}
    const myHirees = [...hiredPeople]
    const myIndex = hiredPeople.findIndex(hiredPerson => hiredPerson.id.value === person.id.value)
    if ( myIndex === -1 ) {      
      myHirees.push(thisPerson)
    } else {
      myHirees[myIndex] = thisPerson
    }
    setHiredPeople(myHirees)
    navigate(Paths.home)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">{UIText.hireWage}</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage ? wage : 0}
      />
      <button type="submit">{UIText.hire}</button>
    </form>
  )
}
