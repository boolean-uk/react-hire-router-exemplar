import { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom';

function HireForm({hiredPeople, setHiredPeople}) {
  const [person, setPerson] = useState(null)
  const [wage, setWage] = useState(0)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state) return
    const personData = location.state.person
    setPerson(personData)
  }, [location])

  function handleSubmit(event) {
    event.preventDefault()
    const newHire = {...person, wage: wage}
    const newPeople = [...hiredPeople, newHire]
    setHiredPeople(newPeople)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
