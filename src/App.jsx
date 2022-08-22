/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import "./App.scss";
import List from "./Components/List/List";
import Button from "./Components/Button/Button";
import Form from "./Components/form/Form";

export default function App() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(true);
    const [userData, setUserData] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    function random(min, max) {
        return min + Math.random() * (max - min);
      }

    useEffect(() => {
        if (!page === true) {
            console.log(`it's next page`);
        }
        console.log(userData);
    }, [page, userData]);
    const handleClick = (value) => {
        setPage(!value);
        console.log(page);
        document.querySelector(".info_section").classList.add("visible");
    };
    const handleDelete = (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove();
        console.log(target.parentElement.parentElement.id);
    };
    

    const updateData = (value) => {
        let x = random(100, 10000)
        setUserData(() => ({
            id: x,
            name: value.name,
            // phone: value.phone,
        }))
        // console.log(value.name);
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
            {!page ? (
                <Form
                    setPage={page}
                    handleClick={handleClick}
                    updateData={updateData}
                ></Form>
            ) : (
                ""
            )}
            {/* {userData ? <List id={userData.id} key={userData.id} ></List> : ''} */}
        </div>
    );
}
