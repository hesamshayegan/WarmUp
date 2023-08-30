import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../common/UserContext";
import Alert from "../common/Alert";
import DeleteUser from "./DeleteUser";

const EditUserForm = ({ updateUser }) => {

    const navigate = useNavigate();

    console.debug(
        "userContext=",  useContext(UserContext)
    )

    const { currentUser, token, userInfoLoaded } = useContext(UserContext);
    
    let INITIAL_STATE = {
        username: "",
        password: "",
        email: "",
        image_profile: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        if (token && currentUser) {
            INITIAL_STATE = {
                password: "",
                email: currentUser.email,
                image_profile: currentUser.image_profile
            };

            setFormData(INITIAL_STATE);
            console.log("INITIAL_STATE", INITIAL_STATE)
        }

    }, [currentUser]);


    if (!currentUser && userInfoLoaded) {
        return <Navigate replace to="/login" />
    }

    const handleSubmit = async evt => {
        evt.preventDefault();

        const profileData = { 
            password: formData.password,
            email: formData.email,
            image_profile: formData.image_profile            
        }

        let result = await updateUser(profileData);

        if (result.success) {
            setFormData(INITIAL_STATE);
            console.log(`edit successful`);
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
        <div className="page-container">
            <form className="EditForm"onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username" className="label">
                        Username
                    </label>
                    <p>{currentUser ? currentUser.username : ""}</p>
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
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="image_profile" className="label">
                        Image profile
                    </label>
                    <input
                        id="image_profile"
                        name="image_profile"
                        value={formData.image_profile}
                        onChange={handleChange}
                        className="input"
                    />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}
                
                <button>Submit</button>
            </form>

            <DeleteUser />
            
        </div>

    )


}

export default EditUserForm;