import { useState } from 'react';

let nextId = 0;
interface Artist {
    id: number;
    name: string;
}
export default function Artists() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<Artist[]>([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++ , name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}{' '}
           <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                ) // this mean creating new array without specify id value
              );
            }}>Delete</button></li>
        ))}
      </ul>
    </>
  );
}
