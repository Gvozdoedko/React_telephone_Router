import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Form.scss";

export default function Form(props) {
    const [fullData, setFullData] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const { handleClick, updateData } = props;

    const handleCancel = () => {
        handleClick(false);
        document.querySelector(".info_section").classList.remove("visible");
    };
    
    const handleName = (e) => {
        let target = e.target.value;
        setName(target);
    };
    useEffect(() => {
        console.log(name);
        console.log(surname);
        console.log(phone);
        console.log(fullData);
        // fullData.map((item) => console.log(item.name))
    }, [name, surname, phone, fullData]);
    const handleSurname = (e) => {
        let target = e.target.value;
        setSurname(target);
    };
    const handleNumber = (e) => {
        let target = e.target.value;
        setPhone(target);
    };
    const handleSave = () => {
        setFullData(() => ({
            name: name + ' ' + surname,
            phone: phone
        }))
        
    }
    useEffect(() => {
        updateData(fullData);
    }, [fullData])

    return (
        <div className="form ">
            <form className="addUser">
                <label>
                    <input
                        type="text"
                        placeholder="Name"
                        onInput={handleName}
                    ></input>
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Surname"
                        onInput={handleSurname}
                    ></input>
                </label>
                <label>
                    <input
                        type="number"
                        placeholder="Phone"
                        onInput={handleNumber}
                    ></input>
                </label>
                <div className="btn">
                    <button type="button" onClick={handleSave} >
                        SAVE
                    </button>
                    <button type="button" onClick={handleCancel}>
                        CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
}
