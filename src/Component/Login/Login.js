import React, { useState, useEffect } from 'react';
import './Login.css';
function Login() {

  const initialValues = { ufname: "", ulname: "", email: "", password: ""}
  const [formValues, setFormValues] = useState({initialValues});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (!values.ufname) {
      errors.ufname = "First name is required!";
    }
    if (!values.ulname) {
      errors.ulname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a vaild email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters!";
    }
    if (!values.c_box) {
      errors.c_box = "click is required!";
    }
    return errors;
  };

  // const handleClick = () => {
  //   if(Object.keys(formErrors).length === 0 && isSubmit){
  //     alert("wellcom user")
  //   }
  // }

  return (
    <>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? alert("wellcome user") : alert("unsucces") } */}
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='input_div name '>
            <div>
              <input className='fname' type='text' name='ufname' placeholder='First Name' value={formValues.ufname} onChange={handleChange}  />
              <p className='p_er'>{formErrors.ufname}</p>
            </div>
            <div>
              <input className='lname' type='text' name='ulname' placeholder='Last Name' value={formValues.ulname} onChange={handleChange} />
              <p className='p_er'>{formErrors.ulname}</p>
            </div>
          </div>
          <div className='input_div'>
            <input className='input_text' type='email' name='email' placeholder='Email address' value={formValues.email} onChange={handleChange} />
            <p className='p_er'>{formErrors.email}</p>
          </div>
          <div className='input_div'>
            <input className='input_text' type='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange} />
            <p className='p_er'>{formErrors.password}</p>
          </div>
          <div className='input_div'>
            <input id='c_box' type='checkbox'  name='c_box' />
            <label htmlFor='c_box' className='label1'>Subscribe to our newsletter</label>
            <p className='p_er' id='p_er'>{formErrors.c_box}</p>
          </div>
          <div className='input_div'>
            <button className='btn' >SIGN UP</button>
          </div>
          <div className='input_div'>
            <label htmlFor='sign' className='label2'>or sign up with:</label>
            <div className='div_a'>
              <a href="https://www.facebook.com/login/" > <i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i class="fa-solid fa-g"></i></a>
              <a href="https://twitter.com/i/flow/login"><i class="fa-brands fa-twitter"></i></a>
              <a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
