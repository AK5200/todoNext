"use client"
import { useState } from "react";
import "../public/index.css"


const page = ()=>{

  const submitHandler = (e)=>{
    e.preventDefault(); // prevents from reloading as the detals will vanish after reloading
    setMainTask([...mainTask, {title, task}]);
    setTtitle("");  // after logging or saving the data we want to clear the inputs
    setTask("");
    console.log(mainTask);
  }



  
  const [title, setTtitle] = useState("");
  const [task, setTask] = useState("");
  const [mainTask, setMainTask] = useState([]);


  const handleDeleteTask = (index)=>{
    let copyTask = [...mainTask];
    copyTask.splice(index,1);
    setMainTask(copyTask);
    
  }
  

  const renderTask = mainTask.map((task,index)=>{
    return <div key={index} className="flex items-center justify-between p-3 m-4 ml-5 mr-5 bg-yellow-100 border-2 border-black rounded">
      <p>{task.title}</p>
      <p>{task.task}</p>
      <button className="text-red-600" onClick={()=>handleDeleteTask(index)}>Delete</button>
    </div>

  })



  return <>
  <h1 class='head p-16 text-center text-white  text-8xl '>Todo list</h1>
  <form class="m-10 flex  justify-center gap-4" onSubmit={submitHandler}>
    <input type="text" class='bg-slate-100 w-1/3  mr-4 p-3 rounded border-4 border-black' name="title" placeholder="Add a new task" value={title} onChange={(e)=>{setTtitle(e.target.value)}}/>
    <input type="text" name="task" class='bg-slate-100 w-1/3 p-3 mr-4 rounded border-4 border-black' placeholder="Description" value={task} onChange={(e)=> {setTask(e.target.value)}} />
    <button class='w-1/6 bg-yellow-300 addbutton p-3 rounded' type="submit">Add</button>
  </form>
   
  <div className="">
   {renderTask}
  </div>
  </> 
}

export default page;