import React, { useState, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

// React js set cookie function
import setCookie from './../../hooks/setCookie';

// For Set gloabal user info "username, avatar, event"
import { UserLogin } from "../../App";


export default function Login() {

    const { setGUserName, setGUserAvatar, setGUserEvent } = useContext(UserLogin); // Set gloabal user info "username, avatar, event"

    const [username, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [formError, setFormError] = useState('');

    const navigate = useNavigate();

    // Login function
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: userPass
            })
        }).then((response) => response.json())
            .then((result) => {
                if (result.status === "success") {
                    console.log(result);

                    setCookie('ComeonUserStaus', result.status);        // set in cookie user status
                    setCookie('ComeonUserName', result.player.name);    // set in cookie user name
                    setCookie('ComeonUserAvatar', result.player.avatar);// set in cookie avatar src
                    setCookie('ComeonUserEvent', result.player.event);  // set in cookie event

                    // set user data to context
                    setGUserName(result.player.name);
                    setGUserAvatar(result.player.avatar);
                    setGUserEvent(result.player.event);

                    // make empty error element
                    setFormError('');

                    navigate("/");

                } else {
                    // if user can not log in give error mesaage top form
                    setFormError(result.error);
                }
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div className="login">
            <div className="centered">
                <form onSubmit={handleSubmit}>
                    <div className="loginErrorInfo">{formError}</div>
                    <div className="fields">
                        <div className="inputCont">
                            <label className="myLabel" htmlFor="userName">UserName</label>
                            <input value={username} onChange={(e) => setUserName(e.target.value)} className="loginUserName myInput" type="text" name="username" placeholder="&nbsp;" id="userName" />
                            <i className="user myUserIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                            </i>
                        </div>
                        <div className="inputCont">
                            <label className="myLabel" htmlFor="userPass">Password</label>
                            <input value={userPass} onChange={(e) => setUserPass(e.target.value)} className="loginUserPass myInput" type="password" name="password" placeholder="&nbsp;" id="userPass" />
                            <i className="lock myLoockIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                </svg>
                            </i>
                        </div>
                        <div className="inputCont">
                            <input className="loginBtn" type="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
