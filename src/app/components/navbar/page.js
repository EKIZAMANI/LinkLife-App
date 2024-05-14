import Link from 'next/link'

const Navbar = () => {


    return (
        <div>
            <div className="px-24 bg-white flex justify-between items-center gap-5   ">
                <div className="flex items-center ">
                    <img src="/logo.png" />
                    <p className="text-4xl font-bold pl-3">LinkLife</p>
                </div>

                <div className="flex items-center  gap-10">
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#instruction">Instruction</a>
                    <Link href="/login"
                        className="items-center bg-custom-green hover:bg-slate-600 text-white font-medium py-2 px-5 rounded-xl" replace>
                        Sign In
                    </Link>
                </div>

            </div>
            <hr className="border-gray-300 w-full border-t-4" />


        </div>



    )
}

export default Navbar