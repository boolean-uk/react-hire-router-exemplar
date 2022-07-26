import { useState } from "react"

import PeopleList from "./components/PeopleList"

export const Dashboard = (props) => {

  const { people } = props
  
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <main className="dashboard-layout">
        {people.length ? (

          <>
            <section>
              <h2>People</h2>
              <PeopleList people={people} isHiredList={false}/>
            </section>
            <section>
              <h2>Hired People</h2>
              <PeopleList people={hiredPeople} isHiredList={true} />
            </section>
          </>

        ) : (

          <p>Fetching people</p>

        )}
      </main>
    </>
  )
}
