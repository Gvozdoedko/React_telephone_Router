import { React } from "react";
import "./List.scss";
import { Link } from "react-router-dom";

export default function List(props) {
    const { name, surname, phone, handleDelete, id } = props;
    return (
        <div className="main" id={id}>
            <Link to={`/Change/${id}`}>
                <div className="name">
                    <p>{name}</p>
                </div>
                <div className="surname">
                    <p>{surname}</p>
                </div>
                <div className="phone">
                    <p>{phone}</p>
                </div>
            </Link>

            <div className="action">
                <button type="button" className="btnAdd" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}
