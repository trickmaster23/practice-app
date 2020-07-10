import React, { useState, useEffect } from 'react';

function Read() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => {
      setUser(result);
      console.log({result});
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>READ</h1>
      <ul>
        {user.map(item => (
          <div>
            <li key={item.id}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Contact Number: {item.phone}</p>
            </li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Read;