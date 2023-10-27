import { people } from '../data/data.tsx';

function getImageUrl(person: any) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
}
export default function ListPeople() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}