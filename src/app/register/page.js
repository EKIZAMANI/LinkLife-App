"use client"
import React, { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [handphoneNo, setHandphoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("")

    const handleRegister = async (event) => {
        event.preventDefault();

        let userRole = role;
        if (email.endsWith('@linklife.com')) {
            userRole = 'admin';
        } else {
            userRole = 'user'
        }

        const data = {
            name,
            birth_date: new Date(birthDate),
            email,
            handphone_no: handphoneNo,
            password,
            role: userRole
        };

        const response = await fetch("/api/Register", {
            method: "POST",
            body: JSON.stringify(data)
        })

        if (response.ok) {
            await response.json();
            window.location.href = '/login';
        } else {
            alert("LOL")
        }
    }

    if (!localStorage.getItem('userId')) {
        return (
            <form className="flex items-center justify-center h-screen" onSubmit={handleRegister}>
                <div className="items-center w-1/3 p-8 bg-custom-grey1 rounded-xl">
                    <p className="text-xl font-bold text-center">REGISTER</p>

                    <p className="py-2 text-l">Nama Lengkap :</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 rounded-lg"
                        required
                    />

                    <p className="py-2 text-l">Tanggal Lahir :</p>
                    <input
                        type="date"
                        name="birth_date"
                        id="birth_date"
                        placeholder="tanggal lahir"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full p-2 rounded-lg"
                        required
                    />

                    <p className="py-2 text-l">Email :</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded-lg"
                        required
                    />

                    <p className="py-2 text-l">No HP :</p>
                    <input
                        type="text"
                        name="handphone_no"
                        id="handphone_no"
                        placeholder="nomor"
                        value={handphoneNo}
                        onChange={(e) => setHandphoneNo(e.target.value)}
                        className="w-full p-2 rounded-lg"
                        required
                    />

                    <p className="py-2 text-l">Password :</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded-lg"
                        required
                    />

                    <div className="flex justify-center m-5">
                        <input
                            type="submit"
                            value="DAFTAR"
                            className="px-5 py-2 font-bold text-white rounded-lg bg-custom-green hover:bg-slate-600"
                            required
                        />
                    </div>

                    <p className="py-2 text-center text-l">
                        Sudah punya akun?
                        <a href="./login" className="font-bold"> Masuk disini</a>
                    </p>
                </div>
            </form>
        )
    } else {
        window.location.href = '/login'
    }
}

export default Register