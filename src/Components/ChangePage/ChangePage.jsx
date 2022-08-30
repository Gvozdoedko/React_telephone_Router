import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ChangePage(props) {
    const { data, userData } = props;
    const [user, setUser] = useState();
    const [users, setUsers] = useState();
    let allData;

    const params = useParams();
    console.log(params.productId);

    useEffect(() => {
        allData = { ...data };
        if (userData !== "undefined") {
            allData = [...data, ...userData];
        }
        setUsers(allData);
    }, [data, userData]);
    useEffect(() => {
        console.log(users);
    }, [users]);

    useEffect(() => {
      if (users !== 'undefined') {
        const result = users.find((user) => user.id == params.productId);
        setUser(result);
        console.log(result);
        console.log(user);
      }
      
        
    }, [users]);
    return (
        <div>
            <div>
                {/* {user.name}
                {user.phone} */}
            </div>
            <Link to="/">Home</Link>
        </div>
    );
}
