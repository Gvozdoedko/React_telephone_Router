import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from '../db.json';

export default function ChangePage() {
    const [user, setUser] = useState({});

    const params = useParams();
    console.log(params.productId);

    useEffect(() => {
      let userData = db;
      console.log(userData);
      console.log(JSON.parse(userData));
    }, [db])
    // useEffect(() => {
    //     fetch('/db.json')
    //         .then((res) => res.json())
    //         .then((allUser) => {
    //             const result = allUser.find(
    //                 (user) => user.id == params.productId
    //             );
    //             setUser(result);
    //         });
    // }, []);
    return (
        <div>
          <div>
            {user.name}
            {user.phone}
          </div>
            <Link to="/">Home</Link>
        </div>
    );
}
