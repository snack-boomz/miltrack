import React, { useContext } from "react";
import { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import "./Register.css";



const Register = () => {

    const {loggedUser2, setLoggedUser2,allUsers,setAllUsers, orgData, setOrgData} = useContext(AppContext)
    const [formComplete, setFormComplete] = useState(false);
    const [user, setUser] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        rank:"",
        supervisor_id: null, 
        // organization_id: 1, setUser(...user, organization_id:organization.id)
        MOS: ""
    });
    const[annualTraining, setAnnualTraining] = useState({
        users_id:allUsers.length+1, 
        training_name:"",
        training_date:""
    })
    const[medTable, setMedTable] = useState({
        users_id:allUsers.length+1, 
        pha_date:"",
        dental_date:"",
        hearing_date:"",
        hiv_date:"",
        vision_date:""
    })
    const[skillsTable, setSkillsTable] = useState({
        users_id:allUsers.length+1, 
        skill_name:""
    })
    const[additionalTable, setAdditionalTable] = useState({
        users_id:allUsers.length+1, 
        additional_name:"" 
    })
    const[evalTable, setEvalTable] = useState({
        users_id:allUsers.length+1, 
        eval_name:"",
        eval_date:""
    })
    

    
    
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [unitWordEntered, setUnitWordEntered] = useState("");
    const [filteredUnit, setFilteredUnit] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");
     
    // const [grade, setGrade] = useState(""); 
    // const [orgId, setOrgId] = useState("");
    // const [supervisor, setSupervisor] = useState(0);
    // const [evalName, setEvalName] = useState("");
    // const [evalDate, setEvalDate] = useState("");
    // const [mos, setMos] = useState("");
    // const [phaDate, setPhaDate] = useState("");
    // const [dentalDate, setDentalDate] = useState("");
    // const [hearingDate, setHearingDate] = useState("");
    // const [hivDate, setHivDate] = useState("");
    // const [visionDate, setVisionDate] = useState("");
    // const [staticSkill, setStaticSkill] = useState("");
    // const [annualTraining2, setAnnualTraining2] = useState("");
    // const [trainingDate, setTrainingDate] = useState("");
    //const [additionalTraining, setAdditionalTraining] = useState("");
    // const userTable = ({ username, fullName, password, grade, supervisor, orgId, mos })
    // const annualTrainingTable2 = ({ annualTraining, trainingDate })
    // const evalTable = ({ evalName, evalDate, })
    // const medicalTable = ({ phaDate, dentalDate, hearingDate, hivDate, visionDate })
    // const staticSkillTable = ({ staticSkill })
    // const additionalTrainingTable = ({ additionalTraining })
    
    const addUserInfo = (url, userInfo) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("post", data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // on submit check if passwords match
        if (user.password === confirmPassword) {
            //setUser(...user, { name, email, username, password });
            setFormComplete(true);
           
        } else {
            setErrorMessages({ name: "pass", message: "Passwords do not match" });
        }
         console.log(user);
    };

    // const renderUserInfo = (


    // );
    useEffect(() => {
        console.log(user);
    }, [user])


    const formMessage = "Please fill out the form above to register";

    if (formComplete) {
        // const supervisors = [
        //     { id: 1, username: 'snackboomz', name: 'Russell Annis', password: '1234', rank: 'E4', supervisor_id: null, organization_id: 'WH06B2' },
        //     { id: 2, username: 'Heath_McGraw', name: 'Heath McGraw', password: '1234', rank: 'E7', supervisor_id: null, organization_id: 'WH3LTO' },
        //     { id: 3, username: 'spoonbillpaver', name: 'Justin Hernandez', password: '1234', rank: 'E6', supervisor_id: null, organization_id: 'WH06B2' },
        //     { id: 4, username: 'CANTfindKEYS', name: 'Tristan Hicks', password: '1234', rank: 'E3', supervisor_id: null, organization_id: 'WH3LTO' },
        //     { id: 5, username: 'keelsonwhimsical', name: 'Michel Alam', password: '1234', rank: 'E4', supervisor_id: null, organization_id: 'WH06B2' },
        //     { id: 6, username: 'ocelottip', name: 'Joe Rogan', password: '1234', rank: 'O6', supervisor_id: 1, organization_id: 'WH3LTO' }
        // ];

        //const units = [
         //   { organization_id: 'WH06B2', unit_name: '5th SFG(A), 3rd BN, B CO' },
         //   { organization_id: 'WH3LTO', unit_name: '1/75 Ranger Regiment HHC' }
       // ] 
        // {organization_name: '5th SFG(A), 3rd BN, B CO', UIC:'WH06B2'},
        // {organization_name: '1/75 Ranger Regiment HHC', UIC:'WH3LTO'},
        // {organization_name: 'Unit_3', UIC:''}


        const eventHandler = (e) => {
            e.preventDefault();
        };

        const handleFilter = (event) => {
            const searchWord = event.target.value;
            setWordEntered(searchWord);
            const newFilter = allUsers.filter((value) => {
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
            const unitFilter = orgData.filter((value) => {
                return value.UIC.toLowerCase().includes(unitWord.toLowerCase());
            });


            if (unitWord === "") {
                setFilteredUnit([]);
            } else {
                setFilteredUnit(unitFilter);
            }
        };


        return (
            <div>
                <div id="register-box" className="w-1/5 mx-auto p-4 min-w-fit max-w-fit bg-slate-100 opacity-90 rounded-md shadow-xl shadow-black">
                <h1>Thank you for registering!
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>Username: {user.username}</p>
                <p>Please fill out the information below to finish setting up your profile!</p>
                </h1>
                </div>
                <form className="completepage" onSubmit={eventHandler}>
                    <div className="columnone">
                    <input type="text" name="rank" placeholder="Grade Ex. e3, o5" maxLength="2" style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} onChange={(e) => {setUser({...user, rank: e.target.value})}} />
                    <div className="search">
                        <input type="text" placeholder="Search for a supervisor here..." style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} value={wordEntered} onChange={handleFilter} />
                        {filteredData.length != 0 && (
                            <div className="dataResult">
                                {filteredData.slice(0, 15).map((value, key) => {
                                    return (
                                        <div>
                                        <a className="dataItem" target="_blank" key={key}></a>
                                        <button onClick={() => {setUser({...user, supervisor_id: value.id}); setWordEntered(value.name)}}>
                                        {wordEntered !== value.name ? <div className="filter">{value.name}</div> : setFilteredData([]) }
                                        </button>
                                        </div> );
                               })}
                            </div>
                        )}
                    </div>
                    <div className="unit">
                        <input type="text" placeholder="Search your UIC here..." style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} value={unitWordEntered} onChange={unitHandler} />
                        {filteredUnit.length != 0 && (
                            <div className="dataResult">
                                {filteredUnit.slice(0, 15).map((value, key) => {
                                    return (
                                        <div>
                                        <a className="dataItem" target="_blank" key={key}></a>
                                        <button onClick={() => {setUser({...user, organization_id:(value.id)}); setUnitWordEntered(value.UIC)}}>
                                        {unitWordEntered !== value.UIC ? <div className="filter">{value.UIC}</div> : setFilteredUnit([]) }
                                        </button>
                                        </div> );
                               })}
                            </div>
                        )}
                    </div>
                   <p><input list="evals" name="eval" placeholder="Evaluation Type" style={{ borderRadius: '5px', width:'100%', textAlign: 'center' }} onChange={(e) => {setEvalTable({...evalTable, eval_name: e.target.value})}}/></p>
                    <datalist id="evals">
                        <option value="OER"/>
                        <option value="NCOER"/>
                        <option value="Counseling"/>
                    </datalist>
                        <div style={{ backgroundColor: 'white',
                                    width: 'fit-content'}}>
                           <p> Eval Date: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="evaldate" maxLength="10" onChange={(e) => {setEvalTable({...evalTable, eval_date:e.target.value})}}/></p>
                        </div>
                    
                    <div>
                        <input type="text" name="mos" placeholder="MOS" maxLength="6" style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} onChange={(e) => {setUser({...user, MOS:e.target.value})}}/>
                       <div style={{backgroundColor: 'white', width: 'fit-content'}}>
                        <p>PHA DATE: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="phadate" maxLength="10" onChange={(e) => {setMedTable({...medTable, pha_date: e.target.value})}}/> </p>
                        <p> DENTAL DATE: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="dentaldate" maxLength="10" onChange={(e) => {setMedTable({...medTable, dental_date:e.target.value})}}/></p>
                        <p> HEARING DATE: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="hearingdate" maxLength="10" onChange={(e) => {setMedTable({...medTable, hearing_date:e.target.value})}}/></p>
                        <p> HIV DATE: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="hivdate" maxLength="10" onChange={(e) => {setMedTable({...medTable, hiv_date:e.target.value})}}/></p>
                        <p>VISION DATE: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="visiondate" maxLength="10" onChange={(e) => {setMedTable({...medTable, vision_date:e.target.value})}}/></p>
                        </div>
                    </div>
                    <input type="text" name="specialskill" placeholder="Static Skill" style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} onChange={(e) => {setSkillsTable({...skillsTable, skill_name:e.target.value})}}/>
                    <input type="text" name="annualtraining" placeholder="Annual Training" style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} onChange={(e) => {setAnnualTraining({...annualTraining, training_name:e.target.value})}}/>                  
                    <p>Training Date: <input className="datebars" type="date" min="2018-01-01" max="2050-12-31" name="trainingdate" maxLength="10" onChange={(e) => {setAnnualTraining({...annualTraining, training_date:e.target.value})}}/></p>
                    <input type="text" name="additional" placeholder="Additional Training" style={{ borderRadius: '5px', width: '250px', textAlign: 'center', borderColor: 'black', marginTop: '10px'}} onChange={(e) => {setAdditionalTable({...additionalTable, additional_name:e.target.value})}}/>
                    <Link to={`/${user.username}`}>
                    <button className="submit" onClick={() => {
                        setFormComplete(false)
                        addUserInfo("http://localhost:3001/users", user)
                        addUserInfo("http://localhost:3001/annual_training", annualTraining)
                        addUserInfo("http://localhost:3001/medical", medTable)
                        addUserInfo("http://localhost:3001/static_skills", skillsTable)
                        addUserInfo("http://localhost:3001/additional", additionalTable)
                        addUserInfo("http://localhost:3001/evaluations", evalTable)
                    }}>Submit</button>
                </Link>
                </div>
                </form>
            </div>

        )
    } else {
        return (
            <div className="reg-container">
                <div className="register-form">Register</div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Full Name</label>
                        <input type="text" name="fullName" required onChange={(e) =>{setUser({...user, name:e.target.value})}} />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="text" name="email" required onChange={(e) => {setUser({...user, email: e.target.value})}} />
                    </div>
                    <div className="input-container">
                        <label>Username</label>
                        <input type="text" name="username" required onChange={(e) => {setUser({...user, username: e.target.value})}} />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" name="pass" required onChange={(e) => {setUser({...user, password:e.target.value})}} />
                        {errorMessages.name === "pass" && <div className="error">{errorMessages.message}</div>}
                    </div>
                    <div className="input-container">
                        <label>Re-Type Password</label>
                        <input type="password" name="confirmPass" required onChange={(e) => {setConfirmPassword(e.target.value)}} />
                        {errorMessages.name === "pass" && <div className="error">{errorMessages.message}</div>}
                    </div>
                    <div className="button-container">
                        <div className="button-container">
                            <input onClick={() => {
                               console.log("click worked")// setFormComplete(false)
                                }} type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};


export default Register;