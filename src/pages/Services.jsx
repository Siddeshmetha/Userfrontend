import userContext from "../context/userContext"
import Base from "../components/Base"
import { useEffect, useState } from "react"
import axios from "axios";
// import { getall } from "../services/user-service";
import { myAxios } from "../services/helper";
import { useNavigate } from "react-router-dom";
// const API="http://localhost:9292/api/v1/users/"
const  Services = () => {
    const [users, setUsers] = useState([]);
    const navigate=useNavigate()


    function handleupdate(user){
        navigate('/update',{state:{data:user}})


    }
    function handleUser(user){
        navigate('/createUser',{state:{data:user}})


    }
    

    useEffect(() => {
      // fetch users using axios library
     myAxios.get("/user/userall")
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));
    }, []);

    const handleDelete = (user) => {
        myAxios.delete(`/user/delete/${user.id}`)
          .then((response) => setUsers(response.data))
          .catch((error) => console.log(error));
    
          window.location.reload();
      }

    console.log(users);
    return (
        <userContext.Consumer>
            {
                (object) => (

                    <Base>
                       
                        <h1 className="text-center mt-5 mb-3"> User DashBoard</h1>
<div className="d-flex justify-content-center align-items-center" style={{height:"60px", width:"100%",margin:"auto"}}>
<button className="text-center btn btn-primary ms-10" onClick={()=>handleUser()} type="submit"  >AddUser</button>

</div>
                 <div className="container">
            <table className='table table-striped table-bordered'>

        
              <thead className='table'>
                
                    <tr className='text-center'>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th> Action</th>
                    
                    </tr>
              </thead>
                <tbody>     {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td> <button className="btn btn-warning ms-2" onClick={()=>handleupdate(user)}> update</button>
        <button className="btn btn-danger ms-2" onClick={()=>handleDelete(user)}> delete</button>
        </td>
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

export default Services