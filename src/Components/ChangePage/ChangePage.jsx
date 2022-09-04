import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ChangePage(props) {
    const { data, userData } = props;
    const [user, setUser] = useState("");
    const [users, setUsers] = useState("");
    let allData;

    const params = useParams();
    console.log(params.productId);

    useEffect(() => {
        allData = Object.assign(...data);
        if (userData !== undefined) {
            allData = Object.assign(...data, userData);
        }
        setUsers(allData);
    }, [data, userData]);
    useEffect(() => {
        console.log(users);
        console.log(user);
        console.log(typeof allData);
    }, [users, user, allData]);
    useEffect(() => {
        if (users !== undefined) {
            setUser(() => {
                const result = Object.values(users).find(
                    (user) => user.id == params.productId
                );
                console.log(result);
                return {
                    name: result.name,
                    phone: result.phone,
                    id: result.id,
                };
            });
        }
    }, [users]);

    const test = () => {
        console.log(users);
        console.log(users.find((e) => e.id == params.productId));
    };
    return (
        <div>
            <div>{user?.id && user.name}</div>
            <button onClick={test}></button>
            <Link to="/">Home</Link>
        </div>
    );
}
