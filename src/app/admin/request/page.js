"use client"
import React, { useState, useEffect } from "react"

const Request = () => {
    const [request, setRequest] = useState([])

    const handleRequest = async () => {
        const response = await fetch('/api/Request', {
            method: 'GET'
        })

        if (response.ok) {
            const data = await response.json()
            setRequest(data.request)
            console.log(data.request)
        } else {
            console.log(response)
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

    const postProgress = async(event, requestId) => {
        event.preventDefault()

        const data = {
            id: requestId,
            status: "on progress"
        }

        const response = await fetch('/api/PostProgress', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.ok) {
            window.location.href = './progress'
        } else {
            alert('ERROR')
        }
    }

    const handleCancel = async(event, requestId) => {
        event.preventDefault()

        const data = {
            id: requestId,
        }

        const response = await fetch('/api/CancelRequest', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.ok) {
            window.location.href = './request'
        } else {
            alert('ERROR')
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    if (localStorage.getItem('userId') && localStorage.getItem('userRole') == 'admin') {
        return (
            <div>
                {request.map((req, index) => (
                    <div className="relative p-4 mx-24 my-10 text-sm border rounded-lg ps-10 border-custom-green ">
                        <div className="">
                            <div className="w-4/5">
                                <h1 className="pb-3 text-2xl font-medium">Penerima:</h1>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Nama</span>: {req.thread.user.name}
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Usia</span>: {calculateAge(req.thread.user.birth_date)} tahun
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Golongan Darah</span>: {req.thread.blood_group}
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Riwayat Penyakit</span>: {req.thread.history}
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Lokasi</span>: {req.thread.location}
                                </p>
                            </div>

                            <div className="w-4/5">
                                <h1 className="pb-3 text-2xl font-medium">Pendonor:</h1>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Nama</span>: {req.comment.user.name}
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Usia</span>: {calculateAge(req.comment.user.birth_date)} tahun
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Golongan Darah</span>: {req.comment.blood_group}
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Riwayat Penyakit</span>: {req.comment.history}
                                </p>
                                <p className="text-xl">
                                    <span className="inline-block w-48">Jadwal</span>: {new Date(req.comment.time).toString()}
                                </p>
                            </div>
                        </div>
                        <div className="absolute flex gap-3 bottom-4 right-4">
                            <button
                                className="flex items-center justify-center h-10 p-2 rounded-lg bottom-4 right-4 bg-custom-grey1"
                                onClick={(event) => handleCancel(event, req.id)}>

                                <p className="px-5 py-2 font-bold ">Batalkan</p>
                            </button>

                            <button
                                className="flex items-center justify-center h-10 p-2 rounded-lg bottom-4 right-4 bg-custom-green"
                                onClick={(event) => postProgress(event, req.id)}>
                                <p className="px-5 py-2 font-bold text-white">Setujui </p>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        )
    } else {
        window.location.href = '/login'
    }
}

export default Request