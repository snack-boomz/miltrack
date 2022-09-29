import React, { useState } from 'react';

import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';


const SubTag = (props) => {


    return (
        <ul key="0" className="w-8/12 list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-16 bg-[#A3BD8A] rounded-lg shadow-2xl justify-start">
            <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">{props.currentSM.rank} {props.currentSM.full_name}</h2>
            <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">Status: {props.currentSM.status}</h2>
            {props.elements.map((element, index) => {
                return Object.keys(element).map((key, key_index) => {

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
                    if (index <= 0) {
                        // console.log(key_index);
                        // console.log(currentValue);
                        let statusColor = "";
                        // console.log(`${currentValue.valueOf()} : ${new Date('2020-01-01').toString().valueOf()}`)

                        if (new Date(currentValue).valueOf() > Date.now()) {
                            
                            if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                statusColor = "orange";
                            } else {
                                statusColor = "green";
                            }

                        } else if (new Date(currentValue).valueOf() < Date.now()) {
                                statusColor = "red";
                        }
                            
                        // console.log(statusColor);
                        return <li key={key_index} className={ statusColor === "green" ? `border border-2 border-black border-double p-8 rounded-md shadow-lg` : `bg-${statusColor}-400 border border-2 border-black border-double p-8 rounded-md shadow-lg` }><strong>{key}</strong>: {statusColor}</li>;
                    }

                })
                
                

                

                // console.log(currentKeys);
                // if (currentKey === 'id') {
                //     return <></>
                // }

                // let currentValue = "";
                // Object.values(props.elements).map((value, value_index) => {
                //     if (value_index === key_index) {
                //         currentValue = value;
                //     }
                // })

                // return <li key={key_index} className="border border-2 border-black border-double p-8 rounded-md shadow-lg"><strong>{key}</strong>: {currentValue}</li>;
            })}
        </ul>
    )
};


export default SubTag;