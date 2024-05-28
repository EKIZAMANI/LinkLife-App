"use client"

import { useEffect, useState } from "react"

const Detail = () => {
    const [thread, setThread] = useState({})
    const [user, setUser] = useState({})
    const [comments, setComment] = useState([])
    const [userComment, setUserComment] = useState([])
    const [request, setRequest] = useState(false)
    

    const id = new URLSearchParams(window.location.search).get('id');

    const handleDetail = async () => {
        const detailResponse = await fetch(`/api/Detail?id=${id}`, {
            method: "GET"
        })

        if (detailResponse.ok) {
            const data = await detailResponse.json();
            setThread(data.thread)
            setUser(data.user)
            setComment(data.comment)
            setUserComment(data.userComment)
            setRequest(data.isRequest)
            console.log(data)
        } else {
            window.location.href = '/thread'
        }
    };

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

    const deleteThread = async (event) => {
        event.preventDefault();

        const response = await fetch(`/api/Delete?id=${id}&type=thread`, {
            method: 'POST'
        });

        if (response.ok) {
            window.location.href = '/thread'
        }
    };

    const deleteComment = async (event) => {
        event.preventDefault();
        const userId = parseInt(localStorage.getItem('userId'));
        const response = await fetch(`/api/Delete?id=${id}&type=comment&userid=${userId}`, {
            method: 'POST'
        });

        if (response.ok) {
            window.location.href = `/detail?id=${id}`;
        } else {
            console.error('Failed to delete comment');
        }
    };

    const handleRequest = async(event, commentId) => {
        event.preventDefault()
        const data = {
            status: 'on going',
            thread_id: parseInt(id),
            comment_id: parseInt(commentId)
        }

        const response = await fetch('/api/PostRequest', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.ok) {
            const newData = await response.json()
            window.location.href = `/detail?id=${id}`;
        } else {
            console.error('Failed to send to admin');
        }
    }


    useEffect(() => {
        handleDetail();
    }, []);

    const hasUserCommented = comments.some(comment => comment.user_id === parseInt(localStorage.getItem('userId')))

    if (localStorage.getItem('userId') && localStorage.getItem('userRole') == 'user') {
        return (
            <div className="px-24 py-10 ">
                <div className="flex w-full p-5 mb-5 border rounded-lg ps-10 border-custom-green">
                    <div className="">
                        <h1 className="pb-3 text-2xl font-medium">{thread.title}</h1>
                        <p className="text-xl">
                            <span className="inline-block ">{user.name}, seorang individu berusia {calculateAge(user.birth_date)} tahun, dengan golongan darah {thread.blood_group}, riwayat penyakit {thread.history}, dapat menerima bantuan dari lokasi {thread.location}. Dengan tulus hati, ia memohon bantuan dari para dermawan untuk memberikan bantuan darah. Setiap tetes darah yang diberikan akan sangat berarti bagi {user.name} dalam memperoleh kembali kesehatannya. Mari bersama-sama membantu {user.name} melalui tindakan kebaikan ini</span>
                        </p>
                        {/* <p className="text-xl">
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
                        </p> */}
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
                        <button
                            className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl"
                            onClick={deleteThread}>
                            Batalkan Permintaan
                        </button>
                    </div>
                )}
    
                {hasUserCommented && (
                    <div className="flex justify-end">
                        <button
                            className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl"
                            onClick={deleteComment}>
                            Batalkan Bantuan
                        </button>
                    </div>
                )}
    
                <p className="mb-5 font-semibold text-center">Bantuan</p>
    
                {comments.map((comment, index) => (
                    <div className="w-full p-5 mb-5 border rounded-lg ps-10 border-custom-green">
                        <div className="">
                            <p className="text-xl">
                                <span className="inline-block ">{comment.name}, seorang individu berusia {calculateAge(comment.birth_date)} tahun, memiliki semangat yang tinggi untuk berkontribusi dalam kegiatan donor darah. Dengan golongan darah {comment.blood_group} dan riwayat penyakit {comment.history}, {comment.name} siap memberikan dukungannya. Jadwalnya telah ditentukan pada {new Date(comment.time).toString()}, dan ia siap hadir dengan penuh semangat untuk memberikan darahnya kepada yang membutuhkan</span>
                            </p>
    
                        </div>
    
                        {!request && parseInt(localStorage.getItem('userId')) === thread.user_id &&  (
                            <div className="flex justify-end">
                                <button
                                    className="px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl"
                                    onClick={(event) => handleRequest(event, comment.id)}>
                                    Terima bantuan
                                </button>
                            </div>
                        )}
                    </div>
                ))}
    
            </div>
        )
    } else {
        window.location.href = '/login'
    }
}

export default Detail