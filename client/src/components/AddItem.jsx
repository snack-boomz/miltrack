//const { useState } = require("react")
import React, { useState, useEffect, useContext } from "react";
import './dashboard.css';
import styled from 'styled-components';
import IndivTag from "./IndivTag";
import SubTag from "./SubTag";
import { AppContext } from '../AppContext';


export const AddItem = (props) => {
    
    let {
        loggedUser,
        setLoggedUser,
        allUsers,
        setAllUsers,
        loggedUserOrg,
        setLoggedUserOrg,
        loggedUserToggle,
        setLoggedUserToggle,
        loggedUserSummary,
        setLoggedUserSummary,
        loggedUserPromiseChainComplete,
        setLoggedUserPromiseChainComplete,
        loggedUserServiceMembers,
        setLoggedUserServiceMembers,
        loggedUserServiceMemberSummaries,
        setLoggedUserServiceMemberSummaries,
        loggedUserServiceMemberPromiseChainComplete,
        setLoggedUserServiceMemberPromiseChainComplete,
        updateFieldsToggle,
        setUpdateFieldsToggle,
        fieldChanged,
        setFieldChanged,
        newFieldChanges,
        setNewFieldChanges,
        fieldFetchesComplete, 
        setFieldFetchesComplete,
        formattedItemsCollection,
        setFormattedItemsCollection
    }
        = useContext(AppContext);

    useEffect(() => {

    }, [fieldChanged])


    const itemTypeHelper = (currentItems, itemType) => {

        let defaultDate = "2022-01-01";
        let formattedItemsArray = [];

        if (typeof currentItems === 'array') {

            if (itemType === "Annual Training") {

                for (let item of currentItems) {

                    let annualTrainingObject = {

                        "training_name": item,
                        "training_date": defaultDate

                    }

                    formattedItemsArray.push(annualTrainingObject)
                    
                }

            } else if (itemType === "Special Training") {

                for (let item of currentItems) {
                    
                    let specialTrainingObject = {

                        "skill_name": item,
                        "skill_refresh_date": defaultDate

                    }

                    formattedItemsArray.push(specialTrainingObject)

                }

            } else if (itemType === "Static Training") {

                for (let item of currentItems) {
                
                    let staticTrainingObject = {

                        "skill_name": item,
                        "skill_refresh_date": defaultDate

                    }

                    formattedItemsArray.push(staticTrainingObject)
                }

            }

        } else {
            if (itemType === "Annual Training") {


                    let annualTrainingObject = {

                        "training_name": currentItems,
                        "training_date": defaultDate

                    }

                    formattedItemsArray.push(annualTrainingObject)
                    
                

            } else if (itemType === "Special Training") {

                
                    
                    let specialTrainingObject = {

                        "skill_name": currentItems,
                        "skill_refresh_date": defaultDate

                    }

                    formattedItemsArray.push(specialTrainingObject)

                

            } else if (itemType === "Static Training") {

                    let staticTrainingObject = {

                        "skill_name": currentItems,
                        "skill_refresh_date": defaultDate

                    }

                    formattedItemsArray.push(staticTrainingObject)
                

            }
        }

        let formattedItemsCollectionCopy = formattedItemsCollection.slice();
        formattedItemsCollectionCopy.push(formattedItemsArray) 
        setFormattedItemsCollection(formattedItemsCollectionCopy)

    }

    const inputHandler = (event) => {
        let currentItem = event.target.value;
        let currentItems;

        if (currentItems.includes(",")) {
            currentItems = currentItem.split(',')
        }

        if (currentItems === undefined) {
            switch(props.itemType) {

                case 'Annual Training':
                    itemTypeHelper(currentItem, "Annual Training")
                    break;

                case 'Special Training':
                    itemTypeHelper(currentItem, "Special Training")
                    break;

                case 'Static Training':
                    itemTypeHelper(currentItem, "Static Training")
                    break;
            }
        }
        if (currentItems !== undefined) {

            switch(props.itemType) {

                case 'Annual Training':
                    itemTypeHelper(currentItems, "Annual Training")
                    break;

                case 'Special Training':
                    itemTypeHelper(currentItems, "Special Training")
                    break;

                case 'Static Training':
                    itemTypeHelper(currentItems, "Static Training")
                    break;
            }
        }
    }
    
    

    return (
        <li
        key="100"
        className="bg-slate-400 border border-2 border-black border-double py-2 px-8 py-8 rounded-md shadow-lg break-all">
        <strong className="text-center">
            {/* If label isn't annual training, put colon after label */}
            <label>{props.itemName}</label>
            <br/>
            <input type="text" name="uname" onChange={inputHandler} required />

        </strong>
        <br/>
        <br/>
        { /* dateHelper(uiDate) */ }
        
        </li> 
    )
}

// border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all