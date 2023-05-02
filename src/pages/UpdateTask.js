import React, { useEffect, useState, useReducer } from 'react'
// import CrNavbar from '../components/CrNavbar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CustomNavbar from '../components/CustomNavbar'
import { myAxios } from '../services/helper'

const UpdateTask = () => {
    const [user, setTask] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const location=useLocation()
    console.log(location)
    const taskdetail=location.state.data

    
    const initailState = {
        // name: user.name && user.name,
        // email: user.email  && user.email,
        taskName: taskdetail.taskName 
       
    }
    const reducer = (state, action) => {
        switch (action.type) {
            // case 'changeName':
            //     return { ...state, name: action.value };
            case 'changetaskName':
                return { ...state, taskName: action.value };
            
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initailState)



    const submit = async (e) => {
        e.preventDefault();
        const updatetask = await myAxios.put(`http://localhost:8080/task/update/${taskdetail.taskId}`, {
            taskName: state.taskName
        })
        navigate('/tasks')
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    useEffect(() => {
        setTask(taskdetail)
    }, [])


    return (
        <div>
            <CustomNavbar/>
            <div className='container pb-5'>
                <h1>Update Task</h1>
                <form>

                    <div className="mb-3">
                        <label className="form-label">update</label>
                        <input type="text" className="form-control" defaultValue={taskdetail.taskName} onChange={(e) => dispatch({ type: 'changetaskName', value: e.target.value })} />
                    </div>

                    
                    <button type="submit" className="btn btn-primary" onClick={submit} >Update</button>
                    <button type="submit" className="btn btn-dark ms-5" onClick={handleBack} >Back</button>
                </form>
            </div>
            </div>
    );
}

export default UpdateTask