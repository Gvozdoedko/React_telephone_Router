import React from "react";
import "./Form.scss";

let newArr = {};
export default function Form(props) {
    const { handleClick } = props;


    const handleCancel = () => {
        handleClick(false);
        document.querySelector('.info_section').classList.remove('visible')
    }
    const handleSave = (e) => {
        let target = e.target.value;
        console.log(target);
    }
    // const handleName = (e) => {
    //     let target = e.target.value;
    //     newArr.name = target;
    //     console.log(target.value);
    //     console.log(newArr);
    // }
    // const handleSurname = (e) => {
    //     let target = e.target.value;
    //     newArr.name = newArr.name + ' ' + target.slice(-1);
    //     console.log(target.value);
    //     console.log(newArr);
    // }
    // const handleNumber = (e) => {
    //     let target = e.target.value;
    //     newArr.phone = target;
    //     console.log(target.value);
    //     console.log(newArr);
    // }



    return (
        <div className="form ">
            <form className="addUser">
                <label>
                    <input type="text" placeholder="Name"></input>
                </label>
                <label>
                    <input type="text" placeholder="Surname"></input>
                </label>
                <label>
                    <input type="number" placeholder="Phone"></input>
                </label>
                <div className="btn">
                    <button type="button" onClick={handleSave}>SAVE</button>
                    <button type="button" onClick={handleCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}
