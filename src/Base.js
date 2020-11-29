import {react, useState} from 'react';

import Context from "./Context";

import ImportContent from "./ImportContent";

import SearchContent from './SearchContent.js'

import AppDetail from './AppDetail';

import Reg from './reg';

import User from './user';


let f = false;
let ff = false;

function Base(props) {
  const [content, setContent] = useState(<SearchContent func={changeContent}></SearchContent>);
  const [viewContent, setViewContent] = useState(<div></div>);
  const [info, setInfo] = useState(<div></div>);
  function checkUser() {
    console.log("shit");
    if (localStorage.length == 0 && !f) {
      setContent(<Reg func={setContent} base={<SearchContent func={changeContent}></SearchContent>}></Reg>)
      f = true;      
    }
    else if (localStorage.length >= 1 && !ff) {
      setInfo(<User func={SignOut}></User>)
      ff=true;
    }
  } 
  checkUser();
  function SignOut() {
    setContent(<Reg func={setContent} base={<SearchContent func={changeContent}></SearchContent>}></Reg>);
    setInfo(<div></div>)
  }
  function changeContent(params) {
    console.log(params, "params");
    let loc = [];
    for (let i of params) loc.push(<div onClick={() => {setContent(<AppDetail entity={i} func={setContent}></AppDetail>); 
    setViewContent(<div></div>)}}>{i.name}</div>)
    console.log(loc, "loc");
    setViewContent(loc);
  }
  //console.log(localStorage.user.email);
  return (
    <Context.Provider value={{func: changeContent}}>
      <div>
        <div>
          <button onClick={() => {setContent(<SearchContent func={changeContent}></SearchContent>)}}>search</button>
          <button onClick={() => {setContent(<ImportContent></ImportContent>)} }>import</button>
          <button>contacts</button>
          {info}
        </div>
        <div>
          {content}
        </div>
        <div> 
          {viewContent}
        </div>
      </div>
    </Context.Provider>
  );
}

export default Base;