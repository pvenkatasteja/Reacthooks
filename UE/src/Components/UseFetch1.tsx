import {useEffect,useState} from 'react';

export const UseFetch1 = (url: any)=>{
    const[state,setState]=useState({data:null,loading:true});
    useEffect(()=>{
        setState({data:null,loading:true});
        fetch(url)
        .then((x: { text: () => any; })=>x.text())
        .then((y: any)=>{setState({data:y,loading:false});
        });
    },[url]);
    return state;
};