import react from "react";
import { useState, useContext, useEffect } from 'react';
import "./Loginbars.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";




const Loginbars = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { loggedUser, setLoggedUser } = useContext(AppContext);
    const [dataUsers, setDataUsers]  = useState([]);
    let navigate = useNavigate();

    useEffect(() => { 
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) => setDataUsers(data));
    }, []);
    useEffect(() => { 
            console.log("userinfo", dataUsers);
    }, [dataUsers]);


    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
       
        event.preventDefault();

        var { uname, pass } = document.forms[0];

      
        const userData = dataUsers.find((user) => user.username === uname.value);
        setLoggedUser(userData)
        console.log(loggedUser);
        if (userData) {
            if (userData.password !== pass.value) {
  
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                setTimeout(() => console.log(isSubmitted), 2000);
            }
        } else {
    
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

  
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <div className="button-container">
                    <input type="submit" />
                 </div>
                 <Link to="/register">
                 <button className="register">Register</button>
                 </Link>
                </div>
            </form>
        </div>
    );


    return (
        <div className="app">
            <div className="login-form">
                <div className="signIn">Sign In</div>
               {isSubmitted ? navigate(`/${loggedUser.username}`) : renderForm}
            </div>
        </div>
    );
}

export default Loginbars;