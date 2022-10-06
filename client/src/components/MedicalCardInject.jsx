import React, { useState } from 'react';

import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import Profile, { staticSkillsTestArrayOfObjects as staticSkills, specialSkillsTestArrayOfObjects as specialSkills, userObject } from './profile';


export const SubTagMedical = (props) => {

    const colorHelper = (amber, red,) => {

        if (red) {
            return 'bg-red-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else if (amber) {
            return 'bg-amber-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else {
            return 'bg-green-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';
        }
    }

    const currentLabelHelper = (currentLabel) => {

        if (currentLabel == "Annual Training") {
            return "Annual"
        } else {
            return currentLabel;
        }

    }

    const currentLabelHelper2 = (currentLabel) => {

        if (currentLabel === "Annual Training") {
            return "Training"
        } else {
            return;
        }

    }

    return (
        <ul key="0" className="w-10/12 h-8/12 width: 'vw' list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">Medical Status</h2>
            {props.elements.map((element, index) => {

                let currentLabel = "";
                let currentLabelStatus = "";
                let amber = false;
                let red = false;



                Object.keys(element).map((key, key_index) => {

                    if (key === "id") {
                        return;
                    }

                    // console.log(key_index)
                    let currentValue = "";
                    Object.values(element).map((value, value_index) => {
                        if (value_index === key_index) {
                            currentValue = value;
                        }
                    })
                    if (index <= 10) {
                        console.log(key);
                        console.log(currentValue);

                        if (key === "current_status") {
                            currentLabel = "Status";

                            if (currentValue === "TDY") {
                                currentLabelStatus = "TDY";
                                red = true;
                            } else if (currentValue === "Leave") {
                                amber = true;
                                currentLabelStatus = "Leave"
                            } else {
                                currentLabelStatus = "PDY"
                            }

                        }
                        // console.log(key_index);
                        // console.log(currentValue);

                        // console.log(`${currentValue.valueOf()} : ${new Date('2020-01-01').toString().valueOf()}`)
                        if (key === "pha_date") {

                            currentLabel = "PHA";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    let date = new Date(currentValue).valueOf();
                                    let msDate = new Date(parseInt(date, 10));
                                    let uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }
                        }

                        if (key === "dental_date") {

                            currentLabel = "Dental";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    let date = new Date(currentValue).valueOf();
                                    let msDate = new Date(parseInt(date, 10));
                                    let uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }
                        }

                        if (key === "hearing_date") {

                            currentLabel = "Hearing";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    let date = new Date(currentValue).valueOf();
                                    let msDate = new Date(parseInt(date, 10));
                                    let uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;

                            }
                        }

                        if (key === "vision_date") {

                            currentLabel = "Vision";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    let date = new Date(currentValue).valueOf();
                                    let msDate = new Date(parseInt(date, 10));
                                    let uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                } else {

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }
                        }

                        if (key === "hiv_date") {

                            currentLabel = "HIV";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    let date = new Date(currentValue).valueOf();
                                    let msDate = new Date(parseInt(date, 10));
                                    let uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                } else {

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                let date = new Date(currentValue).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }

                        }
                        // console.log(statusColor);

                    }

                })

                return <li
                    key={index}
                    className={colorHelper(amber, red)}>
                    <strong className="text-center">
                        {/* If label isn't annual training, put colon after label */}
                        {currentLabelHelper(currentLabel)}{currentLabelHelper2(currentLabel) === undefined ? ":" : ""}

                    </strong>
                    <strong className="text-center">
                        {/* If label isn't annual training, do not add colon on new line */}
                        {currentLabelHelper2(currentLabel)}{currentLabelHelper2(currentLabel) !== undefined ? ":" : ""}
                    </strong>

                    <p className="text-center">{currentLabelStatus}</p>
                </li>;

            })}
        </ul>
    )
};


// ━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━

export const SubTagAnnualTraining = (props) => {

    const colorHelper = (amber, red,) => {

        if (red) {
            return 'bg-red-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else if (amber) {
            return 'bg-amber-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else {
            return 'bg-green-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';
        }
    }

    return (
        <ul key="0" className="w-10/12 h-8/12 width: 'vw' list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">Annual Training</h2>
            </div>
            {
                props.elements.map((skill, index) => {

                let currentLabel = "";
                let currentLabelStatus = "";
                let amber = false;
                let red = false;

                if (skill.users_id === userObject.users_id) {

                    currentLabel = skill.skill_name;

                    // { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 }

                    if (new Date(skill.refresh_date).valueOf() > Date.now()) {

                        let date = new Date(skill.refresh_date).valueOf();
                        let msDate = new Date(parseInt(date, 10));
                        let uiDate = msDate.toDateString();
                        currentLabelStatus = 'Due Date\n' + uiDate;

                        if (new Date(skill.refresh_date).valueOf() - Date.now() <= 2592000000) {

                            let date = new Date(skill.refresh_date).valueOf();
                            let msDate = new Date(parseInt(date, 10));
                            let uiDate = msDate.toDateString();
                            amber = true;
                            currentLabelStatus = 'Due Date\n' + uiDate;

                        }

                    } else if (new Date(skill.refresh_date).valueOf() < Date.now()) {

                        let date = new Date(skill.refresh_date).valueOf();
                        let msDate = new Date(parseInt(date, 10));
                        let uiDate = msDate.toDateString();
                        red = true;
                        currentLabelStatus = 'Due Date\n' + uiDate;
                    }

                }

                
                    if (currentLabel === "") {
                        return <></>
                    } else {

                        return (

                            <li

                                key={index}
                                className={colorHelper(amber, red)}>
                                <strong className="text-center">
                                    {currentLabel}

                                </strong>


                                <p className="text-center">{currentLabelStatus}</p>
                            </li>

                        );

                    }

                })
            }
        </ul>
    )
};


export const SubTagSpecialTraining = (props) => {

    const colorHelper = (amber, red,) => {

        if (red) {
            return 'bg-red-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else if (amber) {
            return 'bg-amber-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else {
            return 'bg-green-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';
        }
    }

    return (
        <ul key="0" className="w-10/12 h-8/12 width: 'vw' list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-2.5 pr-8">Special Training</h2>
                <h5 className="font-bold border-r-2 py-0 pr-8">Additional Skills requiring</h5>
                <h5 className="font-bold border-r-2 py-0 pr-8">recertification</h5>
            </div>
            {
                props.elements.map((skill, index) => {

                let currentLabel = "";
                let currentLabelStatus = "";
                let amber = false;
                let red = false;

                if (skill.users_id === userObject.users_id) {

                    currentLabel = skill.skill_name;

                    // { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 }

                    if (new Date(skill.refresh_date).valueOf() > Date.now()) {

                        let date = new Date(skill.refresh_date).valueOf();
                        let msDate = new Date(parseInt(date, 10));
                        let uiDate = msDate.toDateString();
                        currentLabelStatus = 'Due Date\n' + uiDate;

                        if (new Date(skill.refresh_date).valueOf() - Date.now() <= 2592000000) {

                            let date = new Date(skill.refresh_date).valueOf();
                            let msDate = new Date(parseInt(date, 10));
                            let uiDate = msDate.toDateString();
                            amber = true;
                            currentLabelStatus = 'Due Date\n' + uiDate;

                        }

                    } else if (new Date(skill.refresh_date).valueOf() < Date.now()) {

                        let date = new Date(skill.refresh_date).valueOf();
                        let msDate = new Date(parseInt(date, 10));
                        let uiDate = msDate.toDateString();
                        red = true;
                        currentLabelStatus = 'Due Date\n' + uiDate;
                    }

                }

                
                    if (currentLabel === "") {
                        return <></>
                    } else {

                        return (

                            <li

                                key={index}
                                className={colorHelper(amber, red)}>
                                <strong className="text-center">
                                    {currentLabel}

                                </strong>


                                <p className="text-center">{currentLabelStatus}</p>
                            </li>

                        );

                    }

                })
            }
        </ul>
    )
};

export const SubTagStaticTraining = (props) => {
    const staticItems = (
        <ul>
            {staticSkills.map((skill) =>
                <li key={skill.id}>
                    {skill.name}--
                    {skill.skill_date}
                </li>
            )}
        </ul>
    );
    return (
        <ul key="0" className="w-10/12 h-8/12 list-none flex gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-0 pr-8">Static Training</h2>
                <h5 className="font-bold border-r-2 py-0 pr-8">Relevent Training with no </h5>
                <h5 className="font-bold border-r-2 py-0 pr-8">recertification required</h5>
            </div>
            <ul id='static'>
                {staticItems}
            </ul>


        </ul>
    )

}