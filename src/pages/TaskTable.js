import React, { useState, useEffect } from "react";
import axios from "axios";
import Base from "../components/Base"
import { myAxios } from "../services/helper";
import userContext from "../context/userContext"
import { Navigate, useNavigate } from "react-router-dom";

function TaskTable() {
  const [tasks, setTasks] = useState([]);
  const navigate=useNavigate()

  function handleupdate(task){
    navigate('/updatetask',{state:{data:task}})


}
function handleTask(task){
  navigate('/createTask',{state:{data:task}})


}

  useEffect(() => {
    // fetch tasks from database using axios
    // and set them in the state
    myAxios.get("/task/fetch")
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(tasks)


  const handleDelete = (task) => {
    myAxios.delete(`/task/delete/${task.taskId}`)
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error));

      window.location.reload();
  }

  
     
 

  return (
    <userContext.Consumer>
    {
        (object) => (

                <Base>
                   
                    <h1 className="text-center mt-5 mb-3"> Task Table</h1>
<div className="d-flex justify-content-center align-items-center" style={{height:"60px", width:"100%",margin:"auto"}}>

                    <button className="text-center btn btn-primary ms-10" onClick={()=>handleTask()} type="submit"  >ADD TASK</button>
                    </div>
             <div className="container">
        <table className='table table-striped table-bordered'>

          <thead className='table'>
                <tr className='text-center'>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Date</th>
                <th> Action</th>
                
                </tr>
          </thead>
            <tbody>{tasks.map((task) => (
      <tr key={task.id}>
        <td>{task.taskId}</td>
        <td>{task.taskName}</td>
        <td>{task.assignDate}</td>
        <td> <button  className="btn btn-warning ms-2" onClick={()=>handleupdate(task)}> update</button>
        <button  className="btn btn-danger ms-2" onClick={()=>handleDelete(task)}>Delete</button></td>
      </tr>
    ))}         </tbody>



        </table>
   
        </div>
                </Base>
            )
        }
     </userContext.Consumer>
    )
}
export default TaskTable;