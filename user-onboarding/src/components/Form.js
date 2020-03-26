import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";



export default function Form(props) {

  return (

    <form onSubmit={props.formSubmit}>

      <label htmlFor="name">
        <span className="leftSpan">Name</span>
            <div className="formInput1">
                <input
                    className="inputField nameTest"
                    id="name"
                    type="text"
                    name="name"
                    value={props.formState.name}
                    onChange={props.inputChange}
                />
            </div>
        
        {props.errors.name.length > 0 ? <p className="error">{props.errors.name}</p> : null}
      </label>

      <label htmlFor="email">
        <span className="leftSpan">Email</span>
            <div className="formInput2">
                <input
                    className="inputField emailTest"
                    id="email"
                    type="text"
                    name="email"
                    value={props.formState.email}
                    onChange={props.inputChange}
                />
            </div>
        {props.errors.email.length > 0 ? (
          <p className="error"> {props.errors.email}</p>
        ) : null}
      </label>
      
      <label htmlFor="password" className="password">
        <span className="leftSpan">Password</span>
            <div className="formInput3">
                <input 
                className="inputField passwordTest" 
                id="password" 
                type="password" 
                name="password" 
                onChange={props.inputChange}
                />
            </div>
      </label>

      <label htmlFor="terms" className="terms">
        <input
          className="checkboxTest"
          type="checkbox"
          name="terms"
          checked={props.formState.terms}
          onChange={props.inputChange}
        />
        <a href="/" className="rightSpan">Terms and Conditions</a>
      </label>

      <pre>{JSON.stringify(props.post, null, 2)}</pre>

      <button className="submitTest" disabled={props.buttonDisabled}>SUBMIT</button>

    </form>
  );
}
