"use client"

import React, { useState } from "react"

const InputButton = () => {
    const [historySelect, setHistorySelect] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [history, setHistory] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState("")
    const type = new URLSearchParams(window.location.search).get('type');
    var id = "-1"

    if (type == "reply") {
        id = new URLSearchParams(window.location.search).get('id')
    }

    const handleInput = async (event) => {
        event.preventDefault()

        var data = {}

        if (type == "new") {
            data = {
                title,
                description,
                blood_group: bloodGroup,
                history,
                location,
                user_id: parseInt(localStorage.getItem('userId'))
            }
        } else {
            data = {
                // title,
                description,
                blood_group: bloodGroup,
                history,
                time: new Date(time),
                thread_id: id,
                user_id: parseInt(localStorage.getItem('userId'))
            }
        }

        console.log(data)

        const response = await fetch(`/api/Input?type=${type}`, {
            method: "POST",
            body: JSON.stringify(data)
        })

        if (response.ok) {
            const input = await response.json()
            console.log("Error:", input)
            if (type == "new") window.location.href = '/thread'
            else if (type == "reply") window.location.href = `/detail?id=${id}`
        } else {
            alert("LOL")
            console.log("Error:", response.message)
        }
    }

    return (
        <form
            className="w-4/5 p-8 bg-custom-grey1 rounded-xl"
            onSubmit={handleInput}>

            {type === "new" && (
                <div>
                    <p className="py-1 text-l">Judul Thread :</p>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        className="w-full p-2 mb-2 rounded-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            )}

            <p
                className="py-1 text-l">
                Deskripsi :
            </p>

            <input
                type="text"
                name="description"
                id="description"
                placeholder="description"
                className="w-full p-2 mb-2 rounded-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />

            <p
                className="py-1 text-l">
                Golongan Darah :
            </p>

            <ul
                class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex mb-2">

                <li
                    class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">

                    <div
                        class="flex items-center ps-3">

                        <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            name="list-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            value="A"
                            onChange={(e) => setBloodGroup(e.target.value)} />

                        <label
                            for="horizontal-list-radio-license"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                            Golongan A
                        </label>
                    </div>
                </li>

                <li
                    class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">

                    <div
                        class="flex items-center ps-3">

                        <input
                            id="horizontal-list-radio-id"
                            type="radio"
                            name="list-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            value="B"
                            onChange={(e) => setBloodGroup(e.target.value)} />

                        <label
                            for="horizontal-list-radio-id"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                            Golongan B
                        </label>
                    </div>
                </li>

                <li
                    class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">

                    <div
                        class="flex items-center ps-3">

                        <input
                            id="horizontal-list-radio-military"
                            type="radio"
                            name="list-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            value="AB"
                            onChange={(e) => setBloodGroup(e.target.value)} />

                        <label
                            for="horizontal-list-radio-military"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                            Golongan AB
                        </label>
                    </div>
                </li>

                <li
                    class="w-full">

                    <div
                        class="flex items-center ps-3">

                        <input
                            id="horizontal-list-radio-passport"
                            type="radio"
                            name="list-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            value="O"
                            onChange={(e) => setBloodGroup(e.target.value)} />

                        <label
                            for="horizontal-list-radio-passport"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                            Golongan O
                        </label>
                    </div>
                </li>
            </ul>

            <p
                className="py-1 text-l">
                Riwayat Penyakit :
            </p>

            <ul
                class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">

                <li
                    class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">

                    <div
                        class="flex items-center ps-3">

                        <input
                            id="horizontal-list-radio-license2"
                            type="radio"
                            name="list-radio2"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            value="Yes"
                            onChange={(e) => setHistorySelect(e.target.value)} />

                        <label
                            for="horizontal-list-radio-license2"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                            Ada
                        </label>
                    </div>
                </li>

                <li
                    class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">

                    <div
                        class="flex items-center ps-3">

                        <input
                            id="horizontal-list-radio-id2"
                            type="radio"
                            name="list-radio2"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            value="Tidak ada"
                            onChange={(e) => {
                                setHistorySelect(e.target.value)
                                setHistory(e.target.value)
                            }} />

                        <label
                            for="horizontal-list-radio-id2"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                            Tidak Ada
                        </label>
                    </div>
                </li>
            </ul>

            {historySelect === "Yes" && (
                <input
                    type="text"
                    name="sick"
                    id="sick"
                    placeholder="Isi jika ada"
                    className="w-full p-2 my-2 mb-2 rounded-lg"
                    value={history}
                    onChange={(e) => setHistory(e.target.value)} />
            )}


            {type === "new" && (
                <div>
                    <label
                        for="countries"
                        className="text-l">
                        Pilih Lokasi PMI terdekat :
                    </label>

                    <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                        onChange={(e) => setLocation(e.target.value)}>

                        <option
                            selected>
                            Pilih Lokasi
                        </option>

                        <option
                            value="Aceh Timur">
                            Aceh Timur
                        </option>

                        <option
                            value="Aceh Utara">
                            Aceh Utara
                        </option>

                        <option
                            value="Banda Aceh">
                            Banda Aceh
                        </option>
                    </select>
                </div>
            )}

            {type === "reply" && (
                <div>
                    <p
                        for="jadwal"
                        className="py-1 text-l">
                        Jadwal :
                    </p>

                    <input
                        type="date"
                        name="sick"
                        id="sick"
                        placeholder="Isi jika ada"
                        className="w-full p-2 rounded-lg"
                        value={time}
                        onChange={(e) => setTime(e.target.value)} />
                </div>
            )}

            <div
                className="justify-center mt-5">

                <input
                    type="submit"
                    value="KIRIM"
                    className="w-full py-2 font-bold text-white rounded-lg bg-custom-green hover:bg-slate-600" />

                <p
                    className="mt-5 text-center text-l">
                    Kembali ?

                    <a
                        href="./thread"
                        className="font-bold">
                        Klik Disini!
                    </a>
                </p>
            </div>
        </form>
    )
}

export default InputButton