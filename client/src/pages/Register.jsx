import React from "react";
import { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";




const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [formComplete, setFormComplete] = useState(false);
    const [user, setUser] = useState({});
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // on submit check if passwords match
        if (password === confirmPassword) {
        setUser({ fullName, email, username, password });
        setFormComplete(true);
        } else { 
            setErrorMessages({ name: "pass", message: "Passwords do not match" });
        }
    };

    // const renderUserInfo = (
        
           
    // );
    useEffect(()=>{
         console.log(user);
    },[user])


    const formMessage = "Please fill out the form above to register";

    if(formComplete) {
        return(
         <div>
            <h1>Thank you for registering!</h1>
            <p>Full Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>

            <Link to={`/${user.username}`}>
            <button onClick={()=> {
                setFormComplete(false)
                }}>Okay</button>
                </Link>
        </div>
        )
    }else{
        return (
            <div className="reg-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Full Name</label>
                        <input type="text" name="fullName" required onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="text" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Username</label>
                        <input type="text" name="username" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="text" name="pass" required onChange={(e) => setPassword(e.target.value)} />
                        {errorMessages.name === "pass" && <div className="error">{errorMessages.message}</div>}
                    </div>
                    <div className="input-container">
                        <label>Re-Type Password</label>
                        <input type="text" name="confirmPass" required onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {errorMessages.name === "pass" && <div className="error">{errorMessages.message}</div>}
                    </div>
                    <div className="button-container">
                        <div className="button-container">
                        <input onClick={()=> setFormComplete(false)} type="submit" />
                     </div>
                    </div>
                </form>
            </div>
        )
    }
    };


export default Register;