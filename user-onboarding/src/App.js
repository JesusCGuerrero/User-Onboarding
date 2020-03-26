import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email()
    .required("Email is a required field"),
  terms: yup.boolean().oneOf([true], "please agree to terms of use"),
  password: yup.string()
});

function App() {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    terms: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    terms: "",
    password: "",
  });
  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = e => {

    yup

      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })

      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors
        });
      });

  };

  const formSubmit = e => {

    e.preventDefault();

    axios

      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data);
        console.log("success", post);

        setFormState({
          name: "",
          email: "",
          terms: "",
          password: ""
        });
      })

      .catch(err => {
        console.log(err.res);
      });

  };

  const inputChange = e => {

    e.persist();

    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e);

    setFormState(newFormData);

  };

  return (

<body>

  <h1>Sign Up</h1>

  <Form 
    formSubmit={formSubmit}
    errors={errors}
    validateChange={validateChange}
    buttonDisabled={buttonDisabled}
    inputChange={inputChange}
    formState={formState}
    post={post}
  />

</body>


  );
}

export default App;