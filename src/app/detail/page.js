const Detail = () => {
    return (
        <div className="px-24 py-10 ">
            <div className="flex w-full  p-5 ps-10 border border-custom-green rounded-lg">
                <div className=" ">
                    <h1 className="text-2xl pb-3 font-medium">Butuh 2liter Donor</h1>
                    <p className="text-xl text-justify">Nama             : </p>
                    <p className="text-xl text-justify">Usia             : </p>
                    <p className="text-xl text-justify">Berat Badan      : </p>
                    <p className="text-xl text-justify">Golongan Darah   : </p>
                    <p className="text-xl text-justify">Riwayat Penyakit : </p>
                    <p className="text-xl text-justify">Lokasi           : </p>
                    <p className="text-xl text-justify">Deskripsi        : saya sedang membutuhkan donoran darah 2 liter tipe B it. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermeat</p>
                </div>
            </div>

            <div className="flex py-5 justify-end">
                <a href="/input" className="  bg-custom-green hover:bg-slate-600 text-white font-medium py-2 px-5 rounded-xl" replace>
                    Ayo Bantu
                </a>
            </div>

            {/* <div className="flex py-5 justify-end">
                <a href="#" className="  bg-custom-green hover:bg-slate-600 text-white font-medium py-2 px-5 rounded-xl" replace>
                    Batalkan Permintaan
                </a>
            </div> */}

            <div className=" w-full  p-5 ps-10 border border-custom-green rounded-lg">
                <div className=" ">
                    <h1 className="text-2xl pb-3 font-medium">Bersedia membantu 2 liter darah</h1>
                    <p className="text-xl text-justify">Nama             : </p>
                    <p className="text-xl text-justify">Usia             : </p>
                    <p className="text-xl text-justify">Berat Badan      : </p>
                    <p className="text-xl text-justify">Golongan Darah   : </p>
                    <p className="text-xl text-justify">Riwayat Penyakit : </p>
                    <p className="text-xl text-justify">Lokasi           : </p>
                    <p className="text-xl text-justify">Deskripsi        : saya sedang membutuhkan donoran darah 2 liter tipe B it. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermeat</p>
                </div>

                <div className="flex py-5 justify-end">
                    <a href="#" className="  bg-custom-green hover:bg-slate-600 text-white font-medium py-2 px-5 rounded-xl" replace>
                        Batalkan Bantuan
                    </a>
                </div>

                {/* <div className="flex py-5 justify-end">
                    <a href="#" className="  bg-custom-green hover:bg-slate-600 text-white font-medium py-2 px-5 rounded-xl" replace>
                        Setujui
                    </a>
                </div> */}


            </div>

        </div>
    )
}

export default Detail