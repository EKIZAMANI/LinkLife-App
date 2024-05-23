"use client"

import { useEffect, useState } from "react"

const Detail = () => {
    const [thread, setThread] = useState({})
    const [user, setUser] = useState({})
    const [comments, setComment] = useState([])
    const [userComment, setUserComment] = useState([])

    const id = new URLSearchParams(window.location.search).get('id');

    const handleDetail = async () => {
        const detailResponse = await fetch(`/api/Detail?id=${id}`, {
            method: "GET"
        })

        // const commentResponse = await fetch(`/api/Comment?id=${id}`, {
        //     method: "GET"
        // })

        if (detailResponse.ok) {
            const data = await detailResponse.json();
            setThread(data.thread)
            setUser(data.user)
            setComment(data.comment)
            setUserComment(data.userComment)
            console.log(data)
        } else {
            console.error("Failed to fetch details:", detailResponse.statusText);
        }

        // if (commentResponse.ok) {
        //     const data = await commentResponse.json()
        //     setComment(data.comment)
        // } else {
        //     console.error("Failed to fetch comment:", commentResponse.statusText);
        // }
    };

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age + " tahun";
    };

    useEffect(() => {
        handleDetail();
    }, []);

    const hasUserCommented = comments.some(comment => comment.user_id === parseInt(localStorage.getItem('userId')));

    return (
        <div className="px-24 py-10 ">
            <div className="flex w-full p-5 border rounded-lg ps-10 border-custom-green mb-5">
                <div className="">
                    <h1 className="pb-3 text-2xl font-medium">{thread.title}</h1>
                    <p className="text-xl">
                        <span className="inline-block w-48">Nama</span>: {user.name}
                    </p>
                    <p className="text-xl">
                        <span className="inline-block w-48">Usia</span>: {calculateAge(user.birth_date)}
                    </p>
                    <p className="text-xl">
                        <span className="inline-block w-48">Golongan Darah</span>: {thread.blood_group}
                    </p>
                    <p className="text-xl">
                        <span className="inline-block w-48">Riwayat Penyakit</span>: {thread.history}
                    </p>
                    <p className="text-xl">
                        <span className="inline-block w-48">Lokasi</span>: {thread.location}
                    </p>
                    <p className="text-xl">
                        <span className="inline-block w-48">Deskripsi</span>: {thread.description}
                    </p>
                </div>
            </div>

            {(!hasUserCommented && parseInt(localStorage.getItem('userId')) !== thread.user_id) && (
                <div className="flex justify-end">
                    <a href={`/input?type=reply&id=${id}`} className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                        Ayo Bantu
                    </a>
                </div>)}

            {parseInt(localStorage.getItem('userId')) === thread.user_id && (
                <div className="flex justify-end py-5">
                    <a href="#" className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                        Batalkan Permintaan
                    </a>
                </div>
            )}

            {hasUserCommented && (
                <div className="flex justify-end">
                    <a href={`/input?type=reply&id=${id}`} className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                        Batalkan bantuan
                    </a>
                </div>
            )}

            <p className="text-center mb-5 font-semibold">Bantuan</p>

            {comments.map((comment, index) => (
                <div className="w-full p-5 border rounded-lg ps-10 border-custom-green mb-5">
                    <div className="">
                        <p className="text-xl">
                            <span className="inline-block w-48">Nama</span>: {comment.name}
                        </p>
                        <p className="text-xl">
                            <span className="inline-block w-48">Usia</span>: {calculateAge(comment.birth_date)}
                        </p>
                        <p className="text-xl">
                            <span className="inline-block w-48">Golongan Darah</span>: {comment.blood_group}
                        </p>
                        <p className="text-xl">
                            <span className="inline-block w-48">Riwayat Penyakit</span>: {comment.history}
                        </p>
                        <p className="text-xl">
                            <span className="inline-block w-48">Deskripsi</span>: {comment.description}
                        </p>
                    </div>

                    {parseInt(localStorage.getItem('userId')) === thread.user_id && (
                        <div className="flex justify-end">
                            <a href="#" className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                                Terima bantuan
                            </a>
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}

export default Detail