// import  {UserForm} from "./Components/UserForm";
// import {useEffect} from 'react'
// import {useState} from 'react'
// import {Hello} from './Components/Hello'
// const App = () => {
  // const [values, handlechange] = UserForm({ email:"" , password:"" });
// CDM,CWU

// const [showHello,setShowHello] = useState(true);
// useEffect(()=>{
//   console.log("render");
  
// },[values.password])


// With Events

// useEffect(()=>{
//   const onMouseMove = (e: any)=>{
//     console.log(e);
//   };
//   window.addEventListener("mousemove", onMouseMove);

//   return()=>{
//     window.removeEventListener("mousemove", onMouseMove);
//   }
// },[]);

// import Events from './Components/Events'
import Fet from './Components/Fet'
// import Fet1 from './Components/Fet1'
  //  import Fet2 from './Components/Fet2'
    function App() {
  return (
    <>
    {/* <Fet1/> */}
    {/* <Fet1/> */}
     <Fet/>
     {/* <Events/> */}
    </>
  )
}

export default App;