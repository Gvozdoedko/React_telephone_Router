import React from "react";
import './button.css'

export default function Button(props) {
    return (
        <button className="custom-btn btn-3" onClick={props.onClick}>
            <span>Add</span>
        </button>
    );
}
