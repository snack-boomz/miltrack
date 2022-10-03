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
    const [grade, setGrade] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [unitWordEntered, setUnitWordEntered] = useState("");
    const [filteredUnit, setFilteredUnit] = useState([]);
    const [orgId, setOrgId] = useState("");
    const [supervisor, setSupervisor] = useState(0);


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
    useEffect(() => {
        console.log(user);
    }, [user])


    const formMessage = "Please fill out the form above to register";

    if (formComplete) {
        const supervisors = [
            { id: 1, username: 'snackboomz', name: 'Russell Annis', password: '1234', rank: 'E4', supervisor_id: null, organization_id: 'WH06B2' },
            { id: 2, username: 'Heath_McGraw', name: 'Heath McGraw', password: '1234', rank: 'E7', supervisor_id: null, organization_id: 'WH3LTO' },
            { id: 3, username: 'spoonbillpaver', name: 'Justin Hernandez', password: '1234', rank: 'E6', supervisor_id: null, organization_id: 'WH06B2' },
            { id: 4, username: 'CANTfindKEYS', name: 'Tristan Hicks', password: '1234', rank: 'E3', supervisor_id: null, organization_id: 'WH3LTO' },
            { id: 5, username: 'keelsonwhimsical', name: 'Michel Alam', password: '1234', rank: 'E4', supervisor_id: null, organization_id: 'WH06B2' },
            { id: 6, username: 'ocelottip', name: 'Joe Rogan', password: '1234', rank: 'O6', supervisor_id: 1, organization_id: 'WH3LTO' }
        ];

        const units = [
            { organization_id: 'WH06B2', unit_name: '5th SFG(A), 3rd BN, B CO' },
            { organization_id: 'WH3LTO', unit_name: '1/75 Ranger Regiment HHC' }
        ]


        const eventHandler = (e) => {
            e.preventDefault();
        };

        const handleFilter = (event) => {
            const searchWord = event.target.value;
            setWordEntered(searchWord);
            const newFilter = supervisors.filter((value) => {
                return value.name.toLowerCase().includes(searchWord.toLowerCase());
            });


            if (searchWord === "") {
                setFilteredData([]);
            } else {
                setFilteredData(newFilter);
            }
        };

        const unitHandler = (event) => {
            const unitWord = event.target.value;
            setUnitWordEntered(unitWord);
            const unitFilter = units.filter((value) => {
                return value.organization_id.toLowerCase().includes(unitWord.toLowerCase());
            });


            if (unitWord === "") {
                setFilteredUnit([]);
            } else {
                setFilteredUnit(unitFilter);
            }
        };


        return (
            <div>
                <h1>Thank you for registering!</h1>
                <p>Full Name: {user.fullName}</p>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <form onSubmit={eventHandler}>
                    <input type="text" name="rank" placeholder="Grade Ex. e3, o5" maxlength="2" onChange={(e) => setGrade(e.target.value)} />
                    <div className="search">
                        <input type="text" placeholder="Search for a supervisor here..." value={wordEntered} onChange={handleFilter} />
                        {filteredData.length != 0 && (
                            <div className="dataResult">
                                {filteredData.slice(0, 15).map((value, key) => {
                                    return (
                                        <div>
                                        <a className="dataItem" target="_blank" key={key}></a>
                                        <button onClick={() => {setSupervisor(value.id); setWordEntered(value.name)}}>
                                        {wordEntered !== value.name ? <p>{value.name}</p> : setFilteredData([]) }
                                        </button>
                                        </div> );
                               })}
                            </div>
                        )}
                    </div>
                    <div className="unit">
                        <input type="text" placeholder="Search your UIC here..." value={unitWordEntered} onChange={unitHandler} />
                        {filteredUnit.length != 0 && (
                            <div className="dataResult">
                                {filteredUnit.slice(0, 15).map((value, key) => {
                                    return (
                                        <div>
                                        <a className="dataItem" target="_blank" key={key}></a>
                                        <button onClick={() => {setOrgId(value.organization_id); setUnitWordEntered(value.organization_id)}}>
                                        {unitWordEntered !== value.organization_id ? <p>{value.organization_id}</p> : setFilteredUnit([]) }
                                        </button>
                                        </div> );
                               })}
                            </div>
                        )}
                    </div>
                </form>
                <Link to={`/${user.username}`}>
                    <button onClick={() => {
                        setFormComplete(false)
                    }}>Okay</button>
                </Link>
            </div>
        )
    } else {
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
                        <input type="text" name="confirmPass" required onChange={(e) => setConfirmPassword(e.target.value)} />
                        {errorMessages.name === "pass" && <div className="error">{errorMessages.message}</div>}
                    </div>
                    <div className="button-container">
                        <div className="button-container">
                            <input onClick={() => setFormComplete(false)} type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};


export default Register;