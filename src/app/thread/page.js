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

    useEffect(() => {
        handleThread()
    }, [])

    return (
        <div className="px-24 py-10">
            <form className="bg-custom-grey2">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 text-sm border rounded-lg ps-10 border-custom-green focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                    <a href="/input?type=new" type="submit" className="text-white absolute end-2.5 bottom-2 bg-custom-green hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">New Post</a>
                </div>
            </form>

            <h1 className="pt-5 text-center text-l">Ayo Bantu Pendonoran darah...</h1>

            <div>
                {threads.map((thread, index) => (
                    <a key={index} href={`/detail?id=${thread.id}`} className="relative flex w-full p-4 my-5 text-sm border rounded-lg ps-10 border-custom-green hover:bg-custom-grey1">
                        <div className="w-4/5">
                            <h1 className="pb-3 text-2xl font-medium">{thread.title}</h1>
                            <p className="text-xl text-justify">{thread.user_name} : {thread.description}</p>
                        </div>

                        <div className="absolute bottom-4 right-4 flex items-center justify-center h-10 p-2 rounded-lg bg-custom-grey1">
                            <img className="w-6 pe-1" src="coment.png" alt="Comment Icon" />
                            <p className="text-xl">{thread.comment_count}</p>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Thread