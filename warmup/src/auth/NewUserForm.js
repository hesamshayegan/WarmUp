import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "../common/Alert";

const NewUserForm = ({ registerUser }) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        email: "",
        image_profile: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);
    const navigate = useNavigate();

    console.debug(
        "LoginForm",
        "formData=", formData,
        "formErrors", formErrors,
    );

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        console.log("Form Data to be submitted:", formData);

        // Remove email field if it's empty
            if (formData.email === "") {
                delete formData.email;
            }
        
        let result = await registerUser(formData);

        if (result.success) {
            setFormData(INITIAL_STATE);
            console.log(`signup successful`);
            navigate('/');
        }
        else {
            setFormErrors(result.errors);
        }
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        console.log(`Setting ${name} to ${value}`);
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };



    return (
        <div className="page-container">
            
            <form className="SignupForm" onSubmit={handleSubmit}>
            <h1> Sign Up </h1>
                <div className="input-group">
                    
                    <label htmlFor="username" className="label" >
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input"
                        placeholder="Username"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="(Optional) Email"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="image_profile" className="label">
                        Image Profile
                    </label>
                    <input
                        id="image_profile"
                        name="image_profile"
                        value={formData.image_profile}
                        onChange={handleChange}
                        className="input"
                        placeholder="(Optional) Image Profile"
                    />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}             

                <button>Submit</button>
            </form>

        </div>

    )

}

export default NewUserForm;