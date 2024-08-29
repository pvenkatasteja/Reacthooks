// App.tsx
// CUWDC
import React from 'react';
import {useState} from 'react';
import { UserForm } from './UserForm';
import { UseFetch1 } from './UseFetch1'; // Update the import statement

const App: React.FC = () => {
  const [values, handleChange] = UserForm({
    email: '',
    password: '',
  });
   const [Count,setCount]=useState(0);
  const { data, loading } = UseFetch1(`http://numbersapi.com/${Count}/trivia`);

  return (
    <div>
      <center>
        <div>{loading ? 'Loading...' : data}</div>
        <div>count:{Count}</div>
        <button onClick={()=>setCount((c=>c+1))}>Increment</button>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </center>
    </div>
  );
};

export default App;
