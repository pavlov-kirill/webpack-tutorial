import React, { useState } from "react";
import { render } from "react-dom";
import moment from "moment";

import './style.css';
import './style.scss';

import { getUsers } from './common/usersAPI';

function App() {
    const [state, setState] = useState("CLICK ME");

    return (
        <div>
            <h1>Hello webpack</h1>
            <p>Hello babel</p>
            <button onClick={() => setState("CLICKED")}>{state}</button>
            <button onClick={() => {
                getUsers().then(json => console.log(json));
            }}>get users</button>
            <button onClick={() => console.log(moment.now())}>moment</button>
        </div>);
}

render(<App />, document.getElementById("root"));