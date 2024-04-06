import {  useState } from "react";
import axios from "axios";
import React  from 'react';

function Register() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/employee/save", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });
            alert("Employee Registration Successfully");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div className="container mt-4" >
                <div className="card">
                    <h1>Student Registration</h1>

                    <form>
                        <div className="form-group">
                            <label>Employee name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter Name"

                                   value={firstName}
                                   onChange={(event) => {
                                       setfirstName(event.target.value);
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter Name"

                                   value={lastName}
                                   onChange={(event) => {
                                       setlastName(event.target.value);
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"

                                   value={email}
                                   onChange={(event) => {
                                       setEmail(event.target.value);
                                   }}

                            />

                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password"

                                   value={password}
                                   onChange={(event) => {
                                       setPassword(event.target.value);
                                   }}

                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4" onClick={save}>Save</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;