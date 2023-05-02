import React, { useEffect, useState, useReducer } from 'react'
// import CrNavbar from '../components/CrNavbar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CustomNavbar from '../components/CustomNavbar'
import { myAxios } from '../services/helper'


const Update = () => {
    const [user, setUser] = useState();
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const location=useLocation()
    console.log(location)
    const userdetail=location.state.data

    
    const initailState = {
        // name: user.name && user.name,
        // email: user.email  && user.email,
        name: userdetail.name && userdetail.name,
        email: userdetail.email  && userdetail.email
    }
    const reducer = (state, action) => {
        switch (action.type) {
            // case 'changeName':
            //     return { ...state, name: action.value };
            case 'changeUsername':
                return { ...state, name: action.value };
            case 'changeEmail':
                return { ...state, email: action.value };
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initailState)

   
    const submit = async (e) => {
        e.preventDefault();
        const updateUser = await myAxios.put(`http://localhost:8080/user/update/${userdetail.id}`, {
            name: state.name, email: state.email
        })
        navigate('/services')
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    useEffect(() => {
        setUser(userdetail)
    }, [])


    return (
        <div>
            <CustomNavbar/>
            <div className='container pb-5'>
                <h1>Update User</h1>
                
                
                <form>


                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" defaultValue={userdetail.name} onChange={(e) => dispatch({ type: 'changeUsername', value: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" defaultValue={userdetail.email} onChange={(e) => dispatch({ type: 'changeEmail', value: e.target.value })} />
                    </div>

                    
                    <button type="submit" className="btn btn-primary" onClick={submit} >Update</button>
                    <button type="submit" className="btn btn-dark ms-5" onClick={handleBack} >Back</button>
                </form>
            </div>
            </div>
    );
}

export default Update