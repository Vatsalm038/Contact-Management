import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [tag, setTag] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8083/create", {
        name,
        email,
        phoneNo,
        tag,
        city,
        state,
        country,
      })
      .then((res) => {
        console.log(res);
        navigate('/');
      }).catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-20 bg-primary justify-content-center align-items-center p-2">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">PhoneNo</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter PhoneNo"
              onChange={(e) => setPhoneNo(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Tag</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Designation"
              onChange={(e) => setTag(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City "
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter State "
              onChange={(e) => setState(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country "
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
