"use client"
import React, { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        const data = {
            email,
            password
        }

        const response = await fetch('/api/Login', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.ok) {
            const login = await response.json()

            if (login.isLogin) {
                localStorage.setItem('userId', login.id)
                localStorage.setItem('userName', login.name)
                window.location.href = '/thread'
            } else {
                alert('Error is not login')
            }
        } else {
            alert('Error response is not ok')
        }
    }

    if (!localStorage.getItem('userId')) {
        return (
            <form
                className="flex items-center justify-center h-screen"
                onSubmit={handleLogin}>

                <div
                    className="items-center w-1/3 p-8 bg-custom-grey1 rounded-xl">

                    <p
                        className="text-xl font-bold text-center">
                        LOGIN
                    </p>

                    <p
                        className="py-2 text-l">
                        Email/No.HP :
                    </p>

                    <input
                        type="email"
                        name="user"
                        id="user"
                        placeholder="user"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded-lg" />

                    <p
                        className="py-2 text-l">
                        Password :
                    </p>

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded-lg" />

                    <div
                        className="flex justify-center m-5">

                        <input
                            type="submit"
                            value="MASUK"
                            className="px-5 py-2 font-bold text-white rounded-lg bg-custom-green hover:bg-slate-600" />
                    </div>


                    <p className="py-2 text-center text-l">
                        Belum punya akun?
                        <a href="./register" className="font-bold"> Daftar disini</a>
                    </p>
                </div>
            </form>
        )
    } else {
        window.location.href = '/thread'
    }
}

export default Login