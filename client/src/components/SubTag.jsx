import React, { useState } from 'react';

import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';


const SubTag = (props) => {

    const colorHelper = (amber, red) => {

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

        if (currentLabel == "Annual Training") {
            return "Training"
        } else {
            return;
        }

    }

    return (
        <ul key="0" className="w-6/12 h-8/12 min-w-fit max-w-fit list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl justify-center">
            <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">{props.currentSM.rank} {props.currentSM.full_name}</h2>
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
                        if (key === "pha_date" || key === "dental_date" || key === "hearing_date") {

                            currentLabel = "Medical";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                
                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    amber = true;

                                } else {
                                    
                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                    red = true;
                                    currentLabelStatus = "red";
                            }
                        }

                        if (key === "training_date") {
                            
                            currentLabel = "Annual Training";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                
                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    amber = true;
                                    currentLabelStatus = "amber";

                                } else {
                                    
                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                    red = true;
                                    currentLabelStatus = "red";
                            }

                        }
                        // console.log(statusColor);
                        
                    }
                    
                })
                
                return <li 
                key={index} 
                className={ colorHelper(amber, red) }>
                    <strong className="text-center"> 
                        {/* If label isn't annual training, put colon after label */}
                        { currentLabelHelper(currentLabel) }{currentLabelHelper2(currentLabel) === undefined ? ":" : ""} 
                        <br/>
                    </strong>
                    <strong className="text-center">
                        {/* If label isn't annual training, do not add colon on new line */}
                        { currentLabelHelper2(currentLabel) }{currentLabelHelper2(currentLabel) !== undefined ? ":" : ""}
                    </strong> 
                    <br/>
                    <p className="text-center">{currentLabelStatus}</p> 
                    </li>;

            })}
        </ul>
    )
};


export default SubTag;