import React, { useEffect, useState } from "react";
import { getFromAPI } from "../util/httpMethods";

import "../sass/style.scss";

const HelloWorld = (props) => {

    useEffect(()=> {
        getFromAPI("/api/helloworld")
            .then((data) => {
                setGreeting(data.greeting);
            })
            .catch(error => {
                console.log("Something went wrong!");
                console.log(error);
            });
    }, []);

    const [greeting, setGreeting] = useState('');

    return (<h1>{greeting}</h1>);
}

export default HelloWorld;

export const Head = () => <title>Hello, World!</title>