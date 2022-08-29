import React from "react";
import { useState, useEffect } from "react";
import List from "../List/List";
import Button from "../Button/Button";
import Form from "../form/Form";
import db from "../db.json";
export default function MainPage() {
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
        let newItem = {};
        let result = [];
        data.map((item, i) => {
            newItem.name = item.name;
            newItem.phone = item.phone;
            newItem.id = item.id;
            result.push(JSON.stringify({name: item.name, phone: item.phone, id: item.id}));
            
        });
        db.push(result[1]);
        
        console.log(db);
    }, [data]);

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
        let x = random(100, 10000);
        console.log(value);
        setUserData(() => ({
            id: x,
            name: value.name,
            phone: value.phone,
        }));
    };

    return (
        <div>
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
                {userData ? (
                    <List
                        id={userData.id}
                        key={userData.id}
                        name={userData.name.split(" ")[0]}
                        surname={userData.name.split(" ")[1]}
                        phone={userData.phone}
                        handleDelete={handleDelete}
                    ></List>
                ) : (
                    ""
                )}
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
        </div>
    );
}
