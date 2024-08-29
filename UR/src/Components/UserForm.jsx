import { useState } from "react";

export const UserForm = (initialvalues) => {
    const [values, setValues] = useState(initialvalues);
    return [
        values, e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value

            });
        }
    ]
}

