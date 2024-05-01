const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="w-1/3  bg-custom-grey1 items-center  rounded-xl p-8">
                <p className=" text-xl font-bold text-center">LOGIN</p>


                <p className="text-l py-2">Email/No.HP :</p>
                <input type="text" name="user" id="user" placeholder="user" className="w-full p-2 rounded-lg"></input>

                <p className="text-l py-2">Password :</p>
                <input type="text" name="password" id="password" placeholder="password" className="w-full p-2 rounded-lg"></input>
                <div className="flex justify-center m-5">
                    <input
                        type="submit" value="MASUK" className=" bg-custom-green hover:bg-slate-600 text-white font-bold  px-5 rounded-lg py-2 ">

                    </input>


                </div>
                <p className="text-l py-2 text-center">Belum punya akun? <a href="#" className=" font-bold">Daftar disini</a></p>
            </div>

        </div>
    )
}

export default Login