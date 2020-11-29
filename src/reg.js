import {useState} from 'react';

import SignIn from "./SignIn";

const fetch = require("node-fetch");

function Reg(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  function send() {
    if (password == repPassword){
      fetch("http://localhost:7000/isUserAuth", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"email":email, "a": "2"})
      }).then((e) => {
        e.text().then((e) => {
          if (e == '0') {
            localStorage.setItem("email", email);
            localStorage.setItem("pts", 0);
            localStorage.setItem("password", password);
            fetch("http://localhost:7000/UserAuth", {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({"email":email, "pass": password, "a": "2"})
            });
            props.func(props.base);
          }
        })
      });
      console.log("fuck");
      //localStorage.setItem("user", {email, password});
    }
  }

  return (
    <div>
      <input onChange={(e) => {setEmail(e.target.value)}} placeholder="e-mail"/>
      <input onChange={(e) => {setPassword(e.target.value)}} placeholder="password"/>
      <input onChange={(e) => {setRepPassword(e.target.value)}} placeholder="password again"/>
      <button onClick={send}>зарегаться</button>
      <span onClick={() => {props.func(<SignIn base={props.base} func={props.func}></SignIn>)}}>Уже есть акк</span>
    </div>
  );
}

export default Reg;