import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';


const SubTag = (props) => {
    return (
        <ul className="w-5/12 list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-16 bg-[#A3BD8A] rounded-lg shadow-2xl justify-between">
            <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">{props.currentSM.rank} {props.currentSM.full_name}</h2>
            
            {props.elements.map((element, index) => {
                return Object.keys(element).map((key, key_index) => {

                    if (key === "id") {
                        return <></>;
                    }
                    
                    console.log(key_index)
                    let currentValue = "";
                    Object.values(element).map((value, value_index) => {
                        if (value_index === key_index) {
                            currentValue = value;
                        }
                    })
                    if (key_index <= 4) {
                        console.log(key_index);
                        console.log(currentValue);
                        let statusColor = "";
                        console.log(`${currentValue.toString()} : ${Date('2020-01-01').toString()}`)
                        if (currentValue.toString() < Date('01/01/2020').toString()) {
                            statusColor = "red";
                        } else if (currentValue.toString() > Date('2020-01-01').toString()) {
                            statusColor = "green";
                        }
                        console.log(statusColor);
                        return <li key={key_index} className="border border-2 border-black border-double p-8 rounded-md shadow-lg"><strong>{typeof key == 'object' ? key.toString() : key}</strong>: {statusColor}</li>;
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