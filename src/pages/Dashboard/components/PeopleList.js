import PeopleListItem from "./PeopleListItem"

function PeopleList({ people, areHired}) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} areHired={areHired} />
      ))}
    </ul>
  )
}

export default PeopleList
