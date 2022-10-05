//const { useState } = require("react")
import React, { useState } from "react";
import './profile.css';
import styled from 'styled-components';
import IndivTag from "./IndivTag";
import { SubTagMedical, SubTagAnnualTraining, SubTagSpecialTraining, SubTagStaticTraining } from "./MedicalCardInject";

const userObject = {
    id: 10, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SPC", full_name: "Justin Hernandez", status: "TDY"
}

const medicalBar = {
   name: "Medical Status"
}

export const medicalTestArrayOfObjects = [
    { id:1, pha_date: "2022-10-20" }, 
    { id:2, dental_date: "2022-12-30"} , 
    { id:3, hearing_date: "2023-10-21"} , 
    { id:4, vision_date: "2022-10-21" },
    { id:5, hiv_date: "2019-03-03" }
]


const annualRequirementsTestArrayOfObjects = [
    { id: 1, sharp_date: "2022-11-01" },
    { id: 2, eo_date: '2022-12-30' }, 
    { id: 3, onlineTraining_date: '2022-10-05' },
    { id: 4, tarp_date: "2022-11-01" },
]

const specialSkillsTestArrayOfObjects = [
    { id: 1, language_date: "2022-06-06" },
    { id: 2, radioOperator_date: '2022-11-01',  },
    { id: 3, jtac_date: '2023-03-21' },
]


export const staticSkillsTestArrayOfObjects = [
    { id: 1, name: "Airborne School", skill_date: "2016-07-01" },
    { id: 2, name: "Ranger School", skill_date: "2018-09-01" },
    { id: 3, name: "SEC+ Certification", skill_date: "2022-05-01" },
]

const additionalTestArrayOfObjects = [
    { id: 1, current_status: "PDY" },
    { id: 2, pha_date: '2022-12-30', dental_date: '2022-10-15', hearing_date: '2021-03-21', vaccination_date: '2021-03-21' },
    { id: 3, training_name: '2021-03-21', training_date: '2022-10-05' },
]


function Profile() {
    const [apptDate, setApptDate] = useState("");

    return (

       /* <section key={key} id="wrapper" className="pb-8 m-12">
            <section id='welcome_box' className="w-1/5 mx-auto p-4 min-w-fit max-w-fit bg-slate-100 opacity-90 rounded-md shadow-xl shadow-black">
                <tr key={key}>
                    <div>{val.unit_id}</div>
                    <div>Welcome, {val.username}</div>
                    <div style={{ fontStyle: 'italic' }}>"Stay <strong className="text-[#A3BD8A]">GREEN</strong> to stay in the fight!"</div>
                </tr>
            </section>
        */
        
              
                    <section>
                      
                        {/* <IndivTag elements={ testObject } component="medical"/> */}
                        {/* Logged in Soldier below */}
                        {/* Subordinates below */}
                            {/* <SubTag elements={medicalTestArrayOfObjects}  currentSM={medicalBar} key={key} />
                            <h1>FUCK</h1>  */}


                           {/* < SubTag elements={medicalTestArrayOfObjects} currentSM={userObject} key={key} />
                            <hr className="w-10/12 mx-auto border-t-2 mt-12" /> */}
                            <SubTagMedical elements={medicalTestArrayOfObjects} currentSM={userObject} />
                            <SubTagAnnualTraining elements={annualRequirementsTestArrayOfObjects} currentSM={userObject} />
                            <SubTagSpecialTraining elements={specialSkillsTestArrayOfObjects} currentSM={userObject} />
                            <SubTagStaticTraining elements={staticSkillsTestArrayOfObjects} currentSM={userObject} />


                    </section>
                )
            
        //</section>
    
}

export default Profile;