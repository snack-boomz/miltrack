import React, { useState, useEffect } from "react";
import './dashboard.css';
import styled from 'styled-components';
import IndivTag from "./IndivTag";
import SubTag from "./SubTag";



const userObject = {
    id: 10, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SSG", full_name: "Justin Hernandez", status: "TDY"
  }

  const testObject = {
    id: 1, pha_date: '2021-03-21', dental_date: '2021-03-21', hearing_date: '2021-03-21' 
  }

  const testArrayOfObjects = [
    { id: 1, current_status: "Vision"},
    { id: 2, current_status: "Dental"},
    { id: 3, current_status: "DLC"},
    { id: 4, current_status: "DNA"},
    { id: 5, current_status: "Hearing"},
    { id: 6, current_status: "HIV"},
    { id: 7, current_status: "Immunization"},
    { id: 8, current_status: "PDHRA"},
    { id: 9, current_status: "PHA"}

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



function Medical()  {
    return (
        <>
        
        </>
    )
}

export default Medical;
