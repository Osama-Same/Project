import React, { useState, useEffect } from "react";
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Link,
  } from "react-router-dom";

const Login =()=>{
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        console.log(e);
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
      const [errors, setErrors] = useState({});
        return (
                <form className='from'>
                <section>
                <label>Email</label>
                <input 
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange} 
                value={values.email} autoComplete>
                </input>
                  {errors.email && <p>{errors.email}</p>}
              </section>
              <section>

                  <label>Password </label>
                  <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={values.password}
                   onChange={handleChange}
                   ></input>
                  {errors.password && <p>{errors.password}</p>}
                  
                  <button type="submit">Login</button>
              </section>
              <section>
                  <Router>
                  <Link to=''>Sign Up</Link>
                  </Router>
              </section>
              </form>
            
        )
    }


export default Login
