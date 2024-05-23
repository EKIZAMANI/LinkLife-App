import Link from 'next/link'

const Navbar = () => {


    return (
        <div>
            <div className="flex items-center justify-between gap-5 px-24 bg-white ">
                <div className="flex items-center ">
                    <img src="/logo.png" />
                    <p className="pl-3 text-4xl font-bold">LinkLife</p>
                </div>

                <div className="flex items-center gap-10">
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#instruction">Instruction</a>
                    <a href="/login"
                        className="items-center px-5 py-2 font-medium text-white bg-custom-green hover:bg-slate-600 rounded-xl" replace>
                        Sign In
                    </a>
                </div>

            </div>
            <hr className="w-full border-t-4 border-gray-300" />


        </div>



    )
}

export default Navbar