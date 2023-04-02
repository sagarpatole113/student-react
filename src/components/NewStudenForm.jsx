import axios from "axios";
import React, { useState } from "react";
import base_url from "../api/StudentBootApi";

const NewStudenForm = () => {
  const [student, setStudent] = useState({});
 
  const handleForm = (e) => {
    console.log(student);
    postDataOnServer(student);
    e.preventDefault();
    window.location.replace("/home");
  };
 
  const postDataOnServer = (data) => {
    axios.post(`${base_url}/students`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <form onSubmit={handleForm}>
      <div class="container col-md-5">
        <div class="card">
          <div class="card-body">
            <input type="hidden" />
            <h5 class="card-title">Add New Student</h5>
            <fieldset class="form-group">
              <label>Student Name</label>
              <input
                onChange={(e) => {
                  setStudent({ ...student, name: e.target.value });
                }}
                type="text"
                class="form-control"
                required="required"
              />
            </fieldset>

            <fieldset class="form-group">
              <label>Student Email</label>
              <input
               onChange={(e) => {
                setStudent({ ...student, email: e.target.value });
              }}
              type="text" name="email" class="form-control" />
            </fieldset>

            <fieldset class="form-group">
              <label>Student City</label>
              <input 
               onChange={(e) => {
                setStudent({ ...student, city: e.target.value });
              }}
              type="text" name="city" class="form-control" />
            </fieldset>

            <button type="submit" class="btn btn-success mt-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewStudenForm;
