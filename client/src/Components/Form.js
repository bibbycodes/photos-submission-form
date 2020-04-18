import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form action="" method="post" id="submissionForm">

        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label for="first_name">First Name</label>
            <input type='text' name="first_name" id="first_name" required />
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input type='text' name="last_name" id="last_name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type='email' name="email" id="email" required />
          </div>
          <div>
            <label for="instagram_handle">Instagram Handle</label>
            <input type='text' name="instagram_handle" id="instagram_handle" required />
          </div>
        </fieldset>

        <fieldset>
          <legend>Photo for Submission</legend>

          <div>
            <label for="description">Post Description</label>
            <input type='text' name="description" id="description" required />
          </div>
          <div>
            <label for="hashtags">Hashtags for Post</label>
            <input type='text' name="hashtags" id="hashtags" required />
          </div>
          <div>
            <input type="file" name="filepath" id="filepath" accept="image/png, image/jpeg" />
          </div>
        </fieldset>
      </form>
    ) 
  }
}

export default Form;