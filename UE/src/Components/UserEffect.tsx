import  {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
function App(){
    const [count,setCount]=useState(0);
    useEffect(()=>console.log(count),[count])
    return(
        <>
          <p> you clicked {count} times</p>
          <Button variant="contained" color="success" onClick ={()=>setCount(count+1)}>Click me</Button>
        </>

    );
    
};
export default App;