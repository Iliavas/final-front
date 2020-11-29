import WriteFeedback from './writeFeedback';

function AppDetail(props) {
  return <div>
    <div>{props.entity.name}</div>
    <div>{props.entity.description}</div>
    <div>
      {props.entity.grades.map((e) => {return <div>{e}</div>})}
    </div>
    <button onClick={() => {props.func(WriteFeedback)}}>feedback</button>
  </div>
}

export default AppDetail;