import {useState} from 'react';

import Reg from './reg';

const fetch = require("node-fetch");


function SignIn(props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function Send() {
    fetch("http://localhost:7000/getUser", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"email": email})
    }).then((e) => {
      e.json().then((e) => {
        if (e.password == password) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("pts", e.apps);
          props.func(props.base);
        }
      })
    })
  }

  return (
    <div>
      <input placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
      <input placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/>
      <button onClick={Send}>Войти</button>
      <div onClick={(e) => {props.func(<Reg func={props.func} base={props.base}></Reg>)}}>
        зарегаться
      </div>
    </div>
  );
}

export default SignIn;