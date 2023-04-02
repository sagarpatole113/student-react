import React, { useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { toast } from 'react-toastify';
import base_url from "../api/StudentBootApi"
import axios from 'axios';
const Dashbord = () => {    


    const getAllStudentsFromDatabase = () => {            
        axios.get(`${base_url}/students`).then(
            (response) => {
                console.log(response.data);
                toast.success("Students has been loaded");
                setStudents(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("somthing went wrong")
            }
        );
    };

    useEffect(()=>{
        getAllStudentsFromDatabase();
    },[])



    const [students, setStudents] = useState([])
    

    const deleteStudent = (id) => {
        axios.delete(`${base_url}/students/${id}`).then(
          (response) => {
            console.log(response);
            toast.success("Student Deleted");
            setStudents (prev => prev.filter((el) => el.id !== id));
          },
          (error) => {
            console.log(error);
            toast.success("Could not delete Student");
          }
        )
      }



  return (
    <>          
    <div class="row">
    <div class="container">
        <h3 class="text-center">Student List</h3>
        
        <div class="container">

        <Link to="/add-student" tag="a" action>
    <button class="btn btn-success">Add New Student</button></Link>
        </div>
        
        <div class = "container">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
            students.map((student) =>(
                    <tr>
                        <th scope="row" key={student.id}>{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.city}</td>
                        <td>
                        <Link tag="a" action to="/edit-student"><button   class="btn btn-warning">Edit</button></Link> 
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                             <button  class="btn btn-danger"
                        onClick={() => (
                            deleteStudent(student.id)
                            )}
                        >Delete</button>
                        </td>
                    </tr>     
))}
            </tbody>

        </table>
        </div>
    </div>
</div>
<Outlet />
</>
  )
}

export default Dashbord
