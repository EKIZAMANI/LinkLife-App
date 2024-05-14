const Register = () => {
    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="w-1/3  bg-custom-grey1 items-center  rounded-xl p-8">
                <p className=" text-xl font-bold text-center">REGISTER</p>


                <p className="text-l py-2">Nama Lengkat :</p>
                <input type="text" name="name" id="name" placeholder="name" className="w-full p-2 rounded-lg"></input>

                <p className="text-l py-2">Tanggal Lahir :</p>
                <input type="text" name="tanggal_lahir" id="tanggal_lahir" placeholder="tanggal lahir" className="w-full p-2 rounded-lg"></input>

                <p className="text-l py-2">Email :</p>
                <input type="text" name="email" id="email" placeholder="email" className="w-full p-2 rounded-lg"></input>

                <p className="text-l py-2">No HP :</p>
                <input type="text" name="nomor" id="nomor" placeholder="nomor" className="w-full p-2 rounded-lg"></input>

                <p className="text-l py-2">Password :</p>
                <input type="text" name="password" id="password" placeholder="password" className="w-full p-2 rounded-lg"></input>



                <div className="flex justify-center m-5">
                    <input
                        type="submit" value="DAFTAR" className=" bg-custom-green hover:bg-slate-600 text-white font-bold  px-5 rounded-lg py-2 ">

                    </input>


                </div>
                <p className="text-l py-2 text-center">Sudah punya akun? <a href="./login" className=" font-bold">Masuk disini</a></p>
            </div>

        </div>
    )
}

export default Register