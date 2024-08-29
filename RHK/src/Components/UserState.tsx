// single useState

// import {useState} from "react";

// const usestate = ()=>{
// 	const [count,setCount] = useState(10);

// 	return(
// 		<>
// 		<button onClick={()=>setCount(currentCount =>currentCount+1)}>+</button>
// 		<div>{count}</div>
// 		</>
// 	);
// };
//   export default usestate;

  import {useState} from "react";
  import Button from '@mui/material/Button';

const usestate = ()=>{
	const [count,setCount] = useState(10);
	const [count2,setCount2] = useState(20);

	return(
		<>
		<Button variant="contained" color="success" onClick={()=>{
			setCount(c=>c+1);
            setCount2(c=>c+1);
		}}>+</Button>
		<div>{count}</div>
		<div>{count2}</div>
		</>
	);
};
  export default usestate;
