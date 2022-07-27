import { Link } from 'react-router-dom';

import { UIText, Paths } from '../../../utils/vars'

export const PeopleListItem = ({ person, areHired }) => {

  return (

    <li>
        { areHired ? (
          <>

            <h3>{person.name.first} {person.name.last}</h3>
            <p>{UIText.wageLabel}{person.wage}</p>
            
            <Link to={`${Paths.people}/${person.id.value}`} state={{person}}>
              Edit
            </Link>
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
