import { PeopleListItem } from "./PeopleListItem"

export const PeopleList = ({ people, areHired}) => {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} areHired={areHired} />
      ))}
    </ul>
  )
}
