"use client"

import { useEffect, useState } from "react"

const Thread = () => {
    const [threads, setThreads] = useState([])

    const handleThread = async () => {
        const response = await fetch("/api/Thread", {
            method: "GET"
        })

        if (response.ok) {
            const data = await response.json()
            setThreads(data.threads)
            console.log(data)
        }
    }

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    useEffect(() => {
        handleThread()
    }, [])

    if (localStorage.getItem('userId') && localStorage.getItem('userRole') == 'user') {
        return (
            <div className="px-24 py-10">
                <div className="flex w-full gap-x-2.5 content-center">
                    <form className="flex-grow bg-custom-grey2">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                        <div className="relative">
                            <div className="inset-y-0 flex items-center pointer-events-none start-0 ps-3">

                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 text-sm border rounded-lg ps-10 border-custom-green focus:ring-blue-500 focus:border-blue-500" placeholder="Pencarian..." required />
                            <div className="absolute bottom-2 right-2.5 flex space-x-4">
                                <a href="#" className="bg-custom-grey1 hover:bg-custom-grey2 rounded-lg px-2 py-2">
                                    <img className="w-6 pe-1" src="search.png" alt="Search" />
                                </a>
                            </div>
                        </div>
                    </form>
                    <a href="/input?type=new" className="self-center text-white bg-custom-green hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3">
                        Buat Post
                    </a>
                </div>




                <h1 className="pt-5 text-center text-l">Ayo Bantu Pendonoran darah...</h1>

                <div>
                    {threads.map((thread, index) => (
                        <a key={index} href={`/detail?id=${thread.id}`} className="relative flex w-full p-4 my-5 text-sm border rounded-lg ps-10 border-custom-green hover:bg-custom-grey1">
                            <div className="w-4/5">
                                <h1 className="pb-3 text-2xl font-medium">{thread.title}</h1>
                                <p className="text-xl text-justify">{thread.user_name} : Seseorang berusia {calculateAge(thread.user_birth)} tahun, dengan golongan darah {thread.blood_group}, riwayat penyakit {thread.history}, dapat menerima bantuan dari lokasi {thread.location}</p>
                            </div>

                            <div className="absolute flex items-center justify-center h-10 p-2 rounded-lg bottom-4 right-4 bg-custom-grey1">
                                <img className="w-6 pe-1" src="coment.png" alt="Comment Icon" />
                                <p className="text-xl">{thread.comment_count}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        )
    } else {
        window.location.href = '/login'
    }
}

export default Thread