/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import "./App.scss";
import List from "./Components/List/List";
import Button from "./Components/Button/Button";
import Form from './Components/form/Form'

export default function App() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(true);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (!page === true) {
            console.log(`it's next page`);
        }
    }, [page]);
    const handleClick = (value) => {
        setPage(!value);
        console.log(page);
        document.querySelector('.info_section').classList.add('visible')
    };
    const handleDelete = (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove()
        console.log(target.parentElement.parentElement.id);
    };

    return (
        <div className="App">
            <div className="info_section">
                <div className="help">
                    <div className="help__name">
                        <p>Name</p>
                    </div>
                    <div className="help__surname">
                        <p>Surname</p>
                    </div>
                    <div className="help__phone">
                        <p>Phone</p>
                    </div>
                    <div className="help__action">
                        <p>Action</p>
                    </div>
                </div>
                {data.map((item, i) => (
                    <List
                        id={i}
                        key={i}
                        name={item.name.split(" ")[0]}
                        surname={item.name.split(" ")[1]}
                        phone={item.phone}
                        handleDelete={handleDelete}
                    ></List>
                ))}
            </div>
            <Button onClick={handleClick}></Button>
            {!page ? <Form setPage={page} handleClick={handleClick}></Form> : '' }
            {/* <Form></Form> */}
        </div>
    );
}
