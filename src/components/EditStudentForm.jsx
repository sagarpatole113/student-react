import React from 'react'

const EditStudentForm = () => {


    

  return (
    <div class="container col-md-5">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Edit Student</h5>
                 <input type="hidden"/>
                    
                    <fieldset class="form-group">
                        <label>Student Name</label> 
                        <input type="text"  class="form-control" required="required"/>
                    </fieldset>

                    <fieldset class="form-group">
                        <label>Student Email</label> 
                        <input type="text" name="email" class="form-control"/>
                    </fieldset>
                        
                        <fieldset class="form-group">
                        <label>Student City</label> 
                        <input type="text" name="city"  class="form-control"/>
                    </fieldset>
                        

                        <button type="submit" class="btn btn-success mt-2">Save</button>
                        
                </div>
            </div>
        </div>

  )
}

export default EditStudentForm
