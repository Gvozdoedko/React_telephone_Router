import { React } from "react";
import "./List.scss";

export default function List(props) {
    const { name, surname, phone, handleDelete, id } = props;
    return (
        <div className="main" id={id}>
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="surname">
                <p>{surname}</p>
            </div>
            <div className="phone">
                <p>{phone}</p>
            </div>
            <div className="action">
                <button type="button" className="btnAdd" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}
