import ReactStars from "react-rating-stars-component";

import {useState} from 'react';

function WriteFeedback(props) {

  const [act, setAct] = useState("");
  const [interfac, setInterface] = useState("");
  const [comfort, setComfort] = useState("");
  const [suit, setSuit] = useState("");
  const [average, setAverage] = useState("");

  const [Gact, setGAct] = useState("");
  const [Ginterface, setGInterface] = useState("");
  const [Gcomfort, setGComfort] = useState("");
  const [Gsuit, setGSuit] = useState("");
  const [Gaverage, setGAverage] = useState("");


  return (
    <div>
      <div>
      <ReactStars onChange = {(e) => {setGInterface(e);}}
      ></ReactStars>
      <textarea placeholder="интерфейс" onChange = {(e) => {setInterface(e.target.value)}}></textarea>
      </div>

      <div>
      <ReactStars onChange = {(e) => {setGComfort(e);}}
      ></ReactStars>
      <textarea placeholder="комфорт" onChange= {(e) => {setComfort(e.target.value)}}></textarea>
      </div>


      <div>
      <ReactStars onChange = {(e) => {setGSuit(e);}}
      ></ReactStars>
      <textarea placeholder="пригондость" onChange = {(e) => {setSuit(e.target.value)}} ></textarea>
      </div>

      <div>
      <ReactStars
        onChange={ (e) => {setGAct(e.target.value);}}
      ></ReactStars>
      <textarea placeholder="актуальность" onChange={(e) => {setAct(e.target.value)}}></textarea>
      </div>


      <div>
      <ReactStars
        onChange = {(e) => {setGAverage(e);}}
      ></ReactStars>
      <textarea placeholder="средняя оценка" onChange={(e) => {setAverage(e.target.value)}}></textarea>
      </div>
      <button>
        отправить
      </button>
    </div>
  );
}

export default WriteFeedback;