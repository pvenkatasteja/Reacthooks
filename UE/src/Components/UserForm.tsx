import {useState} from "react";

export const UserForm = (initialvalues:any) =>{
    const [values,setValues] = useState(initialvalues);
    return[ values,(e: { target: { name: any; value: any; }; })=>{setValues({
        ...values,
        [e.target.name]:e.target.value

        
    })},

    ];
};

