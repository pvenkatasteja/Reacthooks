import { UserForm } from "./UserForm";
import { useEffect } from "react";

const App = () => {
  const [values, handlechange] = UserForm({ email: "", password: "" });

  useEffect(() => {
    const onMouseOver = (e: any) => {
      console.log(e);
    };
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

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
