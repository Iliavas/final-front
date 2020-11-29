import {react, useState} from 'react';

import FunctionInput from "./FunctionInput";
const fetch = require("node-fetch");

function ImportContent(props) {
  const [nameInp, setNameInp] = useState("");
  const [descrInp, setDescrInp] = useState("");
  async function sendData() {
    let func  = [];
    for (let i of document.getElementsByClassName("f")) {
      func.push(i.innerText);
    }

    let categ = [];
    for (let i of document.getElementsByClassName("n")){
      categ.push(i.innerText);
    }

    fetch("http://localhost:7000/AddExecutable", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"name": nameInp, "description": descrInp, "functions": func,
      "categories": categ, "a": "2"})
    });
    
  }
  let funcInp = <FunctionInput isFunc={false} ></FunctionInput>
  let catInp = <FunctionInput isFunc={true}></FunctionInput>

  return (

    <div>
      <input type="text" placeholder="название" onChange = {(e) => {setNameInp(e.target.value);}}/>
      {funcInp}
      {catInp}
      <textarea placeholder="описание" onChange = {(e) => {setDescrInp(e.target.value)}}></textarea>
      <button onClick ={sendData}>submit</button>
    </div>
  );
}

export default ImportContent;