//const { useState } = require("react")
import React, { useState, useEffect, useContext } from "react";
import './dashboard.css';
import styled from 'styled-components';
import IndivTag from "./IndivTag";
import SubTag from "./SubTag";
import { AppContext } from '../AppContext';



const userObject = {
    id: 10, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SSG", full_name: "Justin Hernandez", status: "TDY"
  }

  const testObject = {
    id: 1, pha_date: '2021-03-21', dental_date: '2021-03-21', hearing_date: '2021-03-21' 
  }

  const testArrayOfObjects = [
    { id: 1, current_status: "PDY"},
    { id: 2, pha_date: '2022-12-30', dental_date: '2022-10-15', hearing_date: '2021-03-21', vaccination_date: '2021-03-21' },
    { id: 3, training_name: '2021-03-21', training_date: '2022-10-05' },

  ]

const data_user_basic = [
    { "id": 1, username: "Joe Smith", medical_status: 'red', unit_id: '0233, 10th SFG(A)' }
]

const data_user_medical = [
    { "id": 1, pha: "amber", immunizations: 'green', dental: 'amber', hearing: 'green', vision: 'red' }
]

const data_user_additional = [
    { "id": 1, jump_status: 'green', }
]


/*export const dataFetch = (props) => {
    const [userData, setUserData] = useState([]);
    }

    /*    useEffect(() => {
            async function fetchAPI() {
                const res = await fetch('http://localhost:8080/');
                const posts = await res.json();
            }
            fetchAPI();
        }, [])
        return <Context.Provider elementue={userData}></Context.Provider>
    */
function Dashboard() {

    let { loggedUser, setLoggedUser, allUsers, loggedUserOrg, loggedUserToggle, setLoggedUserToggle } = useContext(AppContext);

    let [ loggedUserSummary, setLoggedUserSummary ] = useState([]);

    useEffect(() => {
        console.log(loggedUser[0]);
        let userId = 1;
        let medicalPromise = (
            fetch(`http://localhost:3001/medical/${userId}`)
            .then(response => response.json())
            .then(data => {
                
                setLoggedUserSummary([...loggedUserSummary, ...data])
                console.log("medical promise")
            })
        )
        let annualTrainingPromise = ( 
            fetch(`http://localhost:3001/annual_training/${userId}`)
            .then(response => response.json())
            .then(data => {
            
                setLoggedUserSummary([...loggedUserSummary, ...data])
                console.log("annual training promise")
            })
        )

        let evaluationsPromise = (

            fetch(`http://localhost:3001/evaluations/${userId}`)
            .then(response => response.json())
            .then(data => {
                
                setLoggedUserSummary([...loggedUserSummary, ...data])
                console.log("evaluations promise")
            })

        )

        let specialSkillsPromise = (
            fetch(`http://localhost:3001/special_skills/${userId}`)
            .then(response => response.json())
            .then(data => {
                
                setLoggedUserSummary([...loggedUserSummary, ...data])
                console.log("special skills promise")
            })

        )

        let staticSkillsPromise = (

            fetch(`http://localhost:3001/static_skills/${userId}`)
            .then(response => response.json())
            .then(data => {
                
                setLoggedUserSummary([...loggedUserSummary, ...data])
                console.log("static skills promise")
            })

        )

        Promise.all([medicalPromise, annualTrainingPromise, evaluationsPromise, specialSkillsPromise, staticSkillsPromise])
        .then((info) => {
            console.log("all promises complete");
            console.log(loggedUserSummary)
        })

    }, [loggedUserToggle])

    
    

    // console.log(allUsers);

    // console.log(loggedUserOrg);

    if (loggedUser !== []) {
        return (
            <>
                { /* data_user_basic will be dynamically loaded based on loggedIn user state  */}
                {/* {console.log(loggedUser)} */}
                {loggedUser.map((element, key) => {
                    return (
                        <section  id="wrapper" className="pb-8 m-12">
                        <section id='welcome_box' className="w-1/5 mx-auto p-4 min-w-fit max-w-fit bg-slate-100 opacity-90 rounded-md shadow-xl shadow-black">
                            <tr>
                                <div>{loggedUserOrg === "" ? "Loading..." : loggedUserOrg}</div>
                                <div>Welcome, {element.name}</div>
                                <div className="italic">"Stay <strong className="text-[#A3BD8A]">GREEN</strong> to stay in the fight!"</div>
                            </tr>
                        </section>
                            {/* <IndivTag elements={ testObject } component="medical"/> */}
                            {/* Logged in Soldier below */}
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject } key={key}/> 
                            <hr className="w-10/12 mx-auto border-t-2 mt-12"/>
                            <h3 className="w-2/12 text-2xl font-bold italic text-center min-w-fit max-w-fit mx-auto mt-12 p-2 bg-slate-100 opacity-90 rounded-md shadow-xl shadow-black">SMs tracked:</h3>
                            {/* Subordinates below */}
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject } key={key}/>
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject } key={key}/> 
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject } key={key}/> 
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject } key={key}/> 
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject } key={key}/>  
                        </section>
                    )
                })}
            </>
        )
   } else {
    return (
        <section id="wrapper" className="pb-8 m-12">
            <section id='welcome_box' className="w-1/5 mx-auto p-4 min-w-fit max-w-fit bg-slate-100 opacity-90 rounded-md shadow-xl shadow-black">
                <tr>
                <div>Loading...</div>
                </tr>
            </section>
        </section>
    )
   }

/*
    return (
        <container id= 'container_homepage_user'>
        <div id="App">
            <table>
                <tr>
                    <th>Username</th>
                </tr>
                {data_user_basic.map((element, key) => {
                    return (
                        <tr key={key}>
                            <td>{element.username}</td>
 
                {data_user_basic.map((element, key) => {
                    return (
                        <table>
                        <tr>
                            <th>Medical Status</th>
                        </tr>
                            <td>{element.medical_status}</td>
                        </table>
                        
                    )
                })}
                    
 
                {data_user_additional.map((element, key) => {
                    return (
                        <table>
                        <tr>
                            <th>Jump Status</th>
                        </tr>
                            <td>{element.jump_status}</td>
                        </table>
 
                    )
                })}
                        </tr>
                    )
                })}
            </table>
        </div>
        </container>
    );
*/
}
export default Dashboard;