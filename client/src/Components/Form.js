import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form action="" method="post" id="submissionForm">

        <h2>Photo Submission</h2>

        <fieldset>
          <legend>Personal Details</legend>
          <div className="field-grouping">
            <label for="first_name">First Name</label>
            <input type='text' name="first_name" id="first_name" required />
          </div>
          <div className="field-grouping">
            <label for="last_name">Last Name</label>
            <input type='text' name="last_name" id="last_name" required />
          </div>
          <div className="field-grouping">
            <label for="email">Email</label>
            <input type='email' name="email" id="email" required />
          </div>
          <div className="field-grouping">
            <label for="instagram_handle">Instagram Handle</label>
            <input type='text' name="instagram_handle" id="instagram_handle" required />
          </div>
        </fieldset>

        <fieldset>
          <legend>Photo for Submission</legend>

          <div className="field-grouping">
            <label for="description">Post Description</label>
            <input type='text' name="description" id="description" required />
          </div>
          <div className="field-grouping">
            <label for="hashtags">Hashtags for Post</label>
            <input type='text' name="hashtags" id="hashtags" required />
          </div>
          <div className="field-grouping">
            <input type="file" name="filepath" id="filepath" accept="image/png, image/jpeg" required />
          </div>
        </fieldset>

        <fieldset>
          <legend>Terms and Conditions</legend>
          <p>By using this service you agree to abide by the terms and conditions and relinquish all your money.</p>
          <input type="checkbox" name="tandc" id="tandc" required />
        </fieldset>

        <button type="submit" className="btn"><span id="buttonText">Submit photo</span></button> 
      </form>
    ) 
  }
}

export default Form;