// Browser console
import { UserForm } from "./UserForm";
import {UseFetch} from './UseFetch'

const App = () => {
  const [values, handlechange] = UserForm({ email: "", password: "" });

   UseFetch("http://numbersapi.com/43/trivia");

  return (
    <>
      <center>
        <input name="email" value={values.email} onChange={handlechange} />
        <input type="password" name="password" value={values.password} onChange={handlechange} />
      </center>
    </>
  );
};

export default App;