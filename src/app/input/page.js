const Input = () => {
    return (
        <div className="flex justify-center my-10 items-center ">

            <form className="w-4/5  bg-custom-grey1  rounded-xl p-8">

                <p className="text-l py-1">Judul Thread/Balasan :</p>
                <input type="text" name="tittle" id="tittle" placeholder="tittle" className="w-full p-2 rounded-lg mb-2"></input>

                <p className="text-l py-1">Deskripsi :</p>
                <input type="text" name="name" id="name" placeholder="name" className="w-full p-2 rounded-lg mb-2"></input>

                <p className="text-l py-1">Nama :</p>
                <input type="text" name="name" id="name" placeholder="name" className="w-full p-2 rounded-lg mb-2"></input>

                <p className="text-l py-1">Usia :</p>
                <input type="text" name="age" id="age" placeholder="age" className="w-full p-2 rounded-lg mb-2"></input>

                <p className="text-l py-1">Golongan Darah :</p>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex mb-2  ">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Golongan A </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Golongan B</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="horizontal-list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Golongan AB</label>
                        </div>
                    </li>
                    <li class="w-full ">
                        <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="horizontal-list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Golongan O</label>
                        </div>
                    </li>
                </ul>

                <p className="text-l py-1">Riwayat Penyakit :</p>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex  ">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-license2" type="radio" value="" name="list-radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="horizontal-list-radio-license2" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Ada </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-id2" type="radio" value="" name="list-radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="horizontal-list-radio-id2" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Tidak Ada</label>
                        </div>
                    </li>
                </ul>
                <input type="text" name="sick" id="sick" placeholder="Isi jika ada" className="w-full p-2 rounded-lg my-2 mb-2"></input>

                <label for="countries" className="text-l">Pilih Lokasi PMI terdekat :</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2">
                    <option selected>Pilih Lokasi</option>
                    <option value="US">Aceh Timur</option>
                    <option value="CA">Aceh Utara</option>
                    <option value="FR">Banda Aceh</option>

                </select>

                <p for="jadwal" className="text-l py-1">Jadwal (isi jika sebagai pendonor) :</p>
                <input type="date" name="sick" id="sick" placeholder="Isi jika ada" className="w-full p-2 rounded-lg"></input>



                <div className="justify-center mt-5">
                    <input
                        type="submit" value="KIRIM" className=" bg-custom-green hover:bg-slate-600 text-white font-bold rounded-lg py-2 w-full">

                    </input>

                    <p className="text-l text-center mt-5">Kembali ? <a href="./thread" className=" font-bold">Klik Disini!</a></p>
                </div>
            </form>
        </div>
    )
}


export default Input
