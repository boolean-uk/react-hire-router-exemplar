import { Link, useNavigate } from 'react-router-dom';

import { UIText, Paths } from '../../../utils/vars'

function PeopleListItem({ person, areHired }) {

  const navigate = useNavigate()

  const handleEdit = () => {
    //console.log('my person', person)
    navigate(`${Paths.people}/${person.id.value}`, {state: {person}})
  }
  
  return (

    <li>
        { areHired ? (
          <>

            <h3>{person.name.first} {person.name.last}</h3>
            <p>{UIText.wageLabel}{person.wage}</p>
            <button onClick={handleEdit}>
              {UIText.buttonEdit}
            </button>
          </>
          
        ) : (

          <h3>
            <Link to={`${Paths.people}/${person.id.value}`} state={{person}}>
              {person.name.first} {person.name.last}
            </Link>
          </h3>

        )}
    </li>
  )
}

export default PeopleListItem
