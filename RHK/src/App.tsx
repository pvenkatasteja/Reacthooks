// import UserState from './Components/UserState'

// import FormI from './Components/FormI'
// function App() {
// return (
//     <>
//       <center>
//        {/* <UserState/>  */}
//        <FormI/>
//      </center>
//     </>
//   )
// }

// export default App;
import FormI from "./Components/FormI";

const App = () => {
  const [values, handlechange] = FormI({ email:"" , password:"" });

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





