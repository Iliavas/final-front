import {react, useContext} from "react";
import Context from "./Context";
import FunctionInput from "./FunctionInput";

const fetch = require("node-fetch");


function SearchContent(props) {
  function changeConten(e) {
    let funcs = [];
    for (let i of document.getElementsByClassName("f")) funcs.push(i.innerText);

    let categ = [];
    for (let i of document.getElementsByClassName("n")) categ.push(i);

    fetch("http://localhost:7000/SortedAppRet", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"name": e.target.value,"functions": funcs,
      "categories": categ, "a": "2"})
    }).then((e) => {
      e.json().then((e) => {props.func(e);})
    });
    console.log(e.target.value);
  }
  return (
    <div>
      <input placeholder="начните вводить название" onChange={changeConten}/>
      <FunctionInput isFunc={true} onChange={changeConten}></FunctionInput>
      <FunctionInput isFunc={false} onChange={changeConten}></FunctionInput>
    </div>
  );
}

export default SearchContent;