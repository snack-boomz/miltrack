//const { useState } = require("react")
import React, { useState } from "react";
import './profile.css';
import styled from 'styled-components';
import IndivTag from "./IndivTag";
import { SubTagMedical, SubTagAnnualTraining, SubTagSpecialTraining, SubTagStaticTraining } from "./MedicalCardInject";

export const userObject = {
    users_id: 1, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SPC", full_name: "Justin Hernandez", status: "TDY"
}

// userObject.users_id will equal 1
// console.log(userObject.users_id)
// = 1

const medicalBar = {
    name: "Medical Status"
}

export const medicalTestArrayOfObjects = [
    { id: 1, pha_date: "2022-10-20" },
    { id: 2, dental_date: "2022-12-30" },
    { id: 3, hearing_date: "2023-10-21" },
    { id: 4, vision_date: "2022-10-21" },
    { id: 5, hiv_date: "2019-03-03" }
]


const annualRequirementsTestArrayOfObjects = [
    { id: 1, skill_name: "SHARP TRAINING", refresh_date: "2022-11-01", users_id: 1},
    { id: 2, skill_name: "EO TRAINING", refresh_date: '2022-12-30', users_id: 1 },
    { id: 3, skill_name: "ONLINE TRAINING" , refresh_date: '2022-10-05', users_id: 1  },
    { id: 4, skill_name: "TARP TRAINING", refresh_date: "2022-11-01", users_id: 1  },
]
/*table.increments('id');
table.string('skill_name');
table.string('skill_refresh_date');
table.integer('users_id');
 */

export const specialSkillsTestArrayOfObjects = [
    { id: 1, skill_name: "Fuck All", refresh_date: "2022-06-06", users_id: 1 },
    { id: 2,  skill_name: "Radio Operator", refresh_date: '2022-11-01', users_id: 1 },
    { id: 3,  skill_name: "JTAC", refresh_date: '2023-03-21', users_id: 1 },
    { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 },
    { id: 2,  skill_name: "Radio Operator", refresh_date: '2022-11-01', users_id: 1 },
    { id: 3,  skill_name: "JTAC", refresh_date: '2023-03-21', users_id: 1 },
    { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 },
    { id: 2,  skill_name: "Radio Operator", refresh_date: '2022-11-01', users_id: 1 },
    { id: 3,  skill_name: "JTAC", refresh_date: '2023-03-21', users_id: 1 },
    { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 },
    { id: 2,  skill_name: "Radio Operator", refresh_date: '2022-11-01', users_id: 1 },
    { id: 3,  skill_name: "JTAC", refresh_date: '2023-03-21', users_id: 1 },
    { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 },
    { id: 2,  skill_name: "Radio Operator", refresh_date: '2022-11-01', users_id: 1 },
    { id: 3,  skill_name: "JTAC", refresh_date: '2023-03-21', users_id: 1 },
]


export const staticSkillsTestArrayOfObjects = [
    { id: 1, name: "Airborne School", skill_date: "2016-07-01" },
    { id: 2, name: "Ranger School", skill_date: "2018-09-01" },
    { id: 3, name: "SEC+ Certification", skill_date: "2022-05-01" },
    { id: 4, name: "Air Assault School", skill_date: "2016-07-01" },
    { id: 5, name: "Ranger School", skill_date: "2018-09-01" },
    { id: 6, name: "C+ Certification", skill_date: "2022-05-01" },
    { id: 7, name: "Sniper School", skill_date: "2016-07-01" },
    { id: 8, name: "Sapper School", skill_date: "2018-09-01" },
    { id: 9, name: "NDC Certification", skill_date: "2022-05-01" },
    { id: 10, name: "Touchstone", skill_date: "2016-07-01" },
    { id: 11, name: "Brighton", skill_date: "2018-09-01" },
    { id: 12, name: "Pencil Sharpening 101", skill_date: "2022-05-01" },
    { id: 13, name: "Scuba", skill_date: "2016-07-01" },
    { id: 14, name: "Common Fac Instructor", skill_date: "2018-09-01" },
    { id: 15, name: "IOCAP", skill_date: "2022-05-01" },
    { id: 16, name: "Gryiffin Group", skill_date: "2016-07-01" },
    { id: 17, name: "Spartan Marksman Course", skill_date: "2018-09-01" },
    { id: 18, name: "Vanguard Tactical School", skill_date: "2022-05-01" },
    { id: 19, name: "Galvanize SDI Bootcamp", skill_date: "2016-07-01" },
    { id: 20, name: "Powerpoint 101", skill_date: "2018-09-01" },

]

const userInfo = [
    { id: 1, name: "Joe Smith", rank: "SPC", dob: "2000-01-01", basd: "2020-07-01", unit_id: "B Co, 8th BN, 4th ID", dodid: 123456789, mos: "11C" },
]


function Profile() {
    // const [apptDate, setApptDate] = useState("");

    return (
        <>
            {userInfo.map((val, key) => {
                return (
                    <section key={key} id="wrapper" className="pb-8 m-12">
                        <section id='welcome_box' className="w-1/5 mx-auto p-4 min-w-fit max-w-fit bg-slate-100 opacity-90 rounded-md shadow-xl shadow-black">
                            <tr key={key}>
                                <div>{val.unit_id}</div>
                                <div>Welcome, {val.rank} {val.name}</div>
                                <div style={{ fontStyle: 'italic' }}>"Stay <strong className="text-[#A3BD8A]">GREEN</strong> to stay in the fight!"</div>
                                <div>DOB: {val.dob} </div>
                                <div>BASD: {val.basd} </div>
                                <div>MOS: {val.mos} </div>
                                <div>DODID: {val.dodid} </div>
                            </tr>
                        </section>
                        {/* <IndivTag elements={ testObject } component="medical"/> */}
                        {/* Logged in Soldier below */}
                        <hr className="w-10/12 mx-auto border-t-2 mt-12" />

                        {/* Subordinates below */}
                        <SubTagMedical elements={medicalTestArrayOfObjects} />
                        <SubTagAnnualTraining elements={annualRequirementsTestArrayOfObjects} />
                        <SubTagSpecialTraining elements={specialSkillsTestArrayOfObjects} skill= { specialSkillsTestArrayOfObjects } key={key}/>
                        <SubTagStaticTraining elements={staticSkillsTestArrayOfObjects} />
                    </section>
                )
            })}
        </>
    )
}
/*
                <section>

                    <SubTagMedical elements={medicalTestArrayOfObjects} />
                    <SubTagAnnualTraining elements={annualRequirementsTestArrayOfObjects} />
                    <SubTagSpecialTraining elements={specialSkillsTestArrayOfObjects} />
                    <SubTagStaticTraining elements={staticSkillsTestArrayOfObjects} />

                </section>
*/

export default Profile;