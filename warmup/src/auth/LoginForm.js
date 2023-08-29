import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";

const LoginForm = ({ loginUser }) => {

    const INITIAL_STATE = { username: "", password: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof loginUser,
        "formData=", formData,
        "formErrors", formErrors,
    );


    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /companies.
    */
    
    const handleSubmit = async (e) => {
      e.preventDefault(); 

      let result = await loginUser(formData);

      if (result.success) {
      setFormData(INITIAL_STATE);
        console.log(`login successful`);
        navigate('/');
      }

       else {
        setFormErrors(result.errors);
       }
    }

    const handleChange = evt => {
      const { name, value } = evt.target;
      setFormData(fData => ({
          ...fData,
          [name]: value
      }));
    }


    return (
      <div className="LoginForm">
        <div >
          <h3>Log In</h3>

          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}

                <button onSubmit={handleSubmit}>
                  Submit
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );



}

export default LoginForm;