"use client";

import React, { useState } from "react";

const LoginButton = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        const data = {
            email,
            password
        };

        const response = await fetch("/api/Login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include' // Ensure cookies are sent and received
        });

        if (response.ok) {
            const login = await response.json();

            if (login.isLogin) {
                // Assuming the session token is managed by the server via cookies
                window.location.href = '/thread';
            } else {
                alert("Login failed. Please check your credentials and try again.");
            }
        } else {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <form
            className="flex items-center justify-center h-screen"
            onSubmit={handleLogin}>
            
            <div
                className="items-center w-1/3 p-8 bg-custom-grey1 rounded-xl">
                
                <p className="text-xl font-bold text-center">
                    LOGIN
                </p>

                <p className="py-2 text-l">
                    Email/No.HP :
                </p>

                <input
                    type="email"
                    name="user"
                    id="user"
                    placeholder="user"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 rounded-lg">
                </input>

                <p className="py-2 text-l">
                    Password :
                </p>

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 rounded-lg">
                </input>

                <div className="flex justify-center m-5">
                    <input
                        type="submit"
                        value="MASUK"
                        className="px-5 py-2 font-bold text-white rounded-lg bg-custom-green hover:bg-slate-600">
                    </input>
                </div>

                <p className="py-2 text-center text-l">
                    Belum punya akun? 
                    <a href="./register" className="font-bold"> Daftar disini </a>
                </p>
            </div>
        </form>
    );
}

export default LoginButton;
