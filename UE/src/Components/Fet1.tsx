// App.tsx
// BROWSER
import React from 'react';
import { UserForm } from './UserForm';
import { UseFetch1 } from './UseFetch1'; // Update the import statement

const App: React.FC = () => {
  const [values, handleChange] = UserForm({
    email: '',
    password: '',
  });

  const { data, loading } = UseFetch1('http://numbersapi.com/43/trivia');

  return (
    <div>
      <center>
        <div>{loading ? 'Loading...' : data}</div>
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
