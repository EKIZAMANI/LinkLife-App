const Navbar = () => {
return (
<div>
    <div className="px-24 bg-white flex justify-between items-center gap-5   ">
        <div className="flex items-center ">
            <img src="/logo.png" />
            <p className="text-4xl font-bold pl-3">LinkLife</p>
        </div>

        <div className="flex items-center  gap-10">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <button
                className="items-center bg-custom-green hover:bg-slate-600 text-white font-bold py-2 px-5 rounded-xl">
                Sign In
            </button>
        </div>

    </div>
    <hr className="border-gray-300 w-full border-t-4" />
</div>

)
}

export default Navbar