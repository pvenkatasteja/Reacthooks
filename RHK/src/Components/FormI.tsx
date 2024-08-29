import { useState } from "react";

const FormI = (initialValues: { email: string; password: string; }) => {
  const [values, setValues] = useState(initialValues);

  const handlechange = (e: { target: { name: any; value: any; }; }) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handlechange];
};

export default FormI;
