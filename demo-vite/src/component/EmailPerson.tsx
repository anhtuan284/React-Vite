import { useState } from 'react';
// function MovingDot() {
//     const [position, setPosition] = useState({
//       x: 0,
//       y: 0
//     });
//     return (
//       <div
//         onPointerMove={e => {
//           setPosition({
//             x: e.clientX,
//             y: e.clientY
//           });
//         }}
//         style={{
//           position: 'relative',
//           width: '100vw',
//           height: '100vh',
//         }}>
//         <div style={{
//           position: 'absolute',
//           backgroundColor: 'red',
//           borderRadius: '50%',
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           left: -10,
//           top: -10,
//           width: 20,
//           height: 20,
//         }} />
//       </div>
//     );
//   }

export default function EmailPerson() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e: any) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value // [ ] specify a property with dynamic name
    });
  }

  return (
    <>

      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
      {/* <MovingDot/> */}
    </>
  );
}
