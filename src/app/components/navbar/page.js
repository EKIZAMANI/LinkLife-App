"use client"
import React, { useState, useEffect } from "react"

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const name = localStorage.getItem('userName')

    useEffect(() => {
        if (name) {
            const firstName = name.split(' ')[0]
            setUserName(firstName);
        }
    }, [name]);

    const handleLogout = () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('userName')
        window.location.href = '/login'
    }

    if (!localStorage.getItem('userId')) {
        return (
            <div>
                <div className="flex items-center justify-between gap-5 px-24 bg-white ">
                    <div className="flex items-center ">
                        <img src="/logo.png" />
                        <p className="pl-3 text-4xl font-bold">LinkLife</p>
                    </div>

                    <div className="flex items-center gap-10">
                        <a href="/">Home</a>
                        <a href="/#about">About</a>
                        <a href="/#instruction">Instruction</a>
                        <a href="/login"
                            className="items-center px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                            Sign In
                        </a>
                    </div>

                </div>
                <hr className="w-full border-t-4 border-gray-300" />
            </div>
        )
    } else {
        return (
            <div>
                <div className="h-16 flex items-center  gap-5 px-24 bg-white justify-end ">


                    <div className="flex items-center gap-10">
                        <a href="/">Home</a>
                        <a href="/#about">About</a>
                        <a href="/#instruction">Instruction</a>
                        {/* <a href="/login"
                            className="items-center px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                            Arrijalul
                        </a> */}
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="items-center px-5 py-2 font-bold text-xl text-custom-green  ">
                            Hi, {userName}

                            {!dropdownOpen && (
                                <span className="text-sm ps-1">▼</span>
                            )}
                            {dropdownOpen && (
                                <span className="text-sm ps-1">▲</span>
                            )}
                        </button>

                        {dropdownOpen && (
                            <div
                                className="absolute right-0 mt-32 w-48 bg-white rounded-md shadow-lg py-2 z-10">

                                <button
                                    onClick={handleLogout}
                                    className="block px-4 py-2 text-gray-800 hover:text-custom-green">Logout
                                </button>
                            </div>
                        )}
                    </div>

                </div>
                <hr className="w-full border-t-4 border-gray-300" />
            </div>
        )
    }
}

export default Navbar