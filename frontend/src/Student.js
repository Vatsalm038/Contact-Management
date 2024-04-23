import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Student = () => {
  const [student,setStudent] = useState([]);

  const handleDelete = async (id) =>{
    try{
      await axios.delete('http://localhost:8083/allusers/'+id)
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:8083/')
    .then(res=>setStudent(res.data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className="d-flex vh-100  justify-content-center align-items-center">
      <div className="w-70 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add+</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNo</th>
              <th>Tag</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map(
                (data,i)=>(
                  <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>{data.PhoneNo}</td>
                    <td>{data.Tag}</td>
                    <td>{data.City}</td>
                    <td>{data.State}</td>
                    <td>{data.Country}</td>
                    <td>
                      <Link to={`update/${data.ID}`} className="btn btn-primary">
                        Update
                      </Link>
                      <button className="btn btn-danger ms-2" onClick={e=>handleDelete(data.ID)}>
                        Delete
                      </button>
                    </td>

                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
