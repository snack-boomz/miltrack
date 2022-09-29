//const { useState } = require("react")
import React, { useState, useEffect } from "react";
import './dashboard.css';
import styled from 'styled-components';
import IndivTag from "./IndivTag";
import SubTag from "./SubTag";

const userObject = {
    id: 10, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SSG", full_name: "Justin Hernandez", status: "TDY"
  }

  const testObject = {
    id: 1, pha_date: Date('2021-03-21'), dental_date: Date('2021-03-21'), hearing_date: Date('2021-03-21') 
  }

  const testArrayOfObjects = [
    { id: 2, pha_date: Date('2021-03-21'), dental_date: Date('2021-03-21'), hearing_date: Date('2021-03-21'), vaccination_date: Date('2021-03-21') },
    { id: 3, training_name: Date('2021-03-21'), training_date: Date('2019-02-01') },
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
        return <Context.Provider value={userData}></Context.Provider>
    */
function Dashboard() {

    return (
        <>
            {data_user_basic.map((val, key) => {
                return (
                    <>
                    <container id='welcome_box'>
                        <tr key={key}>
                        <div>{val.unit_id}</div>
                        <div>Welcome, {val.username}</div>
                        <div style={{fontStyle: 'italic'}}>"Stay GREEN to stay in the fight!"</div>
                        </tr>
                    </container>
                         <IndivTag elements={ testObject } component="medical"/>
                            <SubTag elements={ testArrayOfObjects } currentSM= { userObject }/>
                            </>
                )
            })}
        </>
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
                {data_user_basic.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.username}</td>
 
                {data_user_basic.map((val, key) => {
                    return (
                        <table>
                        <tr>
                            <th>Medical Status</th>
                        </tr>
                            <td>{val.medical_status}</td>
                        </table>
                        
                    )
                })}
                    
 
                {data_user_additional.map((val, key) => {
                    return (
                        <table>
                        <tr>
                            <th>Jump Status</th>
                        </tr>
                            <td>{val.jump_status}</td>
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

export default Dashboard;