import "./App.css";
import { useState } from "react";

function Crud() {
  
  const [initialstr,setStr] = useState("");
  const [indexList,setList] = useState([]);

  const Changing = (event)=>{
    setStr(event.target.value)
  }
  const Clicking = ()=>{
    const task = {
      id: indexList.length === 0 ? 1 : indexList[indexList.length-1].id+1,
      taskName:initialstr
    }
    const needarr = [...indexList,task]
    setList(needarr)
  }
  const deletetask =(id)=>{
    const task = indexList.filter((task)=>{
      if (id === task.id){
        return false
      }else{
        return true
      }
    });
    setList(task);
  }

  return (
  <div className="Crud" > 
    <div className="head">
      <input type="text" onChange={Changing} />
      <button onClick={Clicking}> Add Task </button>
    </div>
    <div className="list">
      {
        indexList.map((task)=>{
          return <div>
            <h1>{task.taskName}</h1>
            <button onClick={()=>deletetask(task.id)}>X</button>
          </div>
        })
      }
    </div>
  </div>
  );
}


export default Crud;


