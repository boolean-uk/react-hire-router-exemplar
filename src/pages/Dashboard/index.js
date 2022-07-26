import PeopleList from "./components/PeopleList"

import { UIText } from '../../utils/vars'

export const Dashboard = ({ people, hiredPeople }) => {

  return (
    <>
      <main className="dashboard-layout">
        {people.length ? (

          <>
            <section>
              <h2>{UIText.people}</h2>
              <PeopleList people={people} areHired={false}/>
            </section>
            <section>
              <h2>{UIText.peopleHired}</h2>
              <PeopleList people={hiredPeople} areHired={true} />
            </section>
          </>

        ) : (

          <p>{UIText.peopleFetch}</p>

        )}
      </main>
    </>
  )
}
