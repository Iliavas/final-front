import {react, useState} from 'react';

import server from "./server";

const fetch = require("node-fetch");


function FunctionInput(props) {

  async function getCategories() {
    let a = await fetch("http://localhost:7000/getCategories")
    let t = await a.json();
    return t;
  }

  async function getFunctions() {
    let a = await fetch("http://localhost:7000/GetAllFunc")
    let t = await a.json();
    return t;
  }


  const [load, setLoad] = useState(false);
  const [list, setList] = useState([]);
  if (!load){
    if (props.isFunc == true){
      getFunctions().then((e) => {
      setList(e);
      setLoad(true); 
    })}
    else {
      getCategories().then((e) => {
        setList(e);
        setLoad(true); 
    })
  }}
  const [inputData, setInputData] = useState("");
  function changeVal(val) {
    if (val.length == 0) return;
    setListReady(listReady.concat([val]));
    setList(list.filter((e) => {return e.name != val;}))
  }


  const [listReady, setListReady] = useState([]);

  function removeListReady(idx) {
    setListReady(listReady.filter((e) => {return e != idx;}))
  }

  return <div>
    {listReady.map((e) => {return <div><span className={props.isFunc ? "f" : "n"}>{e}</span><span onClick={() => removeListReady(e)}>"  x"</span></div>})}
    <input list={props.isFunc ? "f" : "n"} onChange = {(e) => {setInputData(e.target.value)}} onBlur = {() => changeVal(inputData)} placeholder={
      props.isFunc ? "функции" : "категории"
    } value={inputData} onFocus={() => {setInputData("")}}/>
    <datalist id={props.isFunc ? "f" : "n"}>
      {list.map((e) => {return <option  key={e._id}>{e.name}</option>})}
    </datalist>
  </div>
}

export default FunctionInput;