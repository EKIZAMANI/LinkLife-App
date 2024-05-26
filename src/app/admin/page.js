const Admin = () => {
    return (
        <div>

            <div className="relative flex  p-4 mx-24 my-10 text-sm border rounded-lg ps-10 border-custom-green ">


                <div className="">

                    <div className="w-4/5">
                        <h1 className="pb-3 text-2xl font-medium">Penerima:</h1>
                        <p className="text-xl text-justify">Nama</p>
                        <p className="text-xl text-justify">Usia</p>
                        <p className="text-xl text-justify">Golongan darah</p>
                        <p className="text-xl text-justify">Riwayat penyakit</p>
                        <p className="text-xl text-justify mb-5">Lokasi</p>

                    </div>

                    <div className="w-4/5">
                        <h1 className="pb-3 text-2xl font-medium">Pendonor:</h1>
                        <p className="text-xl text-justify">Nama</p>
                        <p className="text-xl text-justify">Usia</p>
                        <p className="text-xl text-justify">Golongan darah</p>
                        <p className="text-xl text-justify">Riwayat penyakit</p>
                        <p className="text-xl text-justify">Jadwal</p>

                    </div>
                </div>




                <div className=" absolute bottom-4 right-4 flex gap-3  ">
                    <a href="" className=" bottom-4 right-4 flex items-center justify-center h-10 p-2 rounded-lg bg-custom-grey1">

                        <p className="px-5 py-2 font-bold ">Batalkan</p>
                    </a>

                    <a href="" className=" bottom-4 right-4 flex items-center justify-center h-10 p-2 rounded-lg bg-custom-green">

                        <p className="px-5 py-2 font-bold text-white">Setujui </p>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Admin