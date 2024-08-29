import {useEffect} from 'react';

export const UseFetch = (url: any)=>{
    useEffect(()=>{
        fetch(url)
        .then((x: { text: () => any; })=>x.text())
        .then((y: any)=>{console.log(y);
        });
    },[url]);
};