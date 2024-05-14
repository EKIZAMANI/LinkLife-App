const Thread = () => {
    return (
        <div className="px-24 py-10">
            <form className="bg-custom-grey2">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border border-custom-green rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                    <a href="/input" type="submit" className="text-white absolute end-2.5 bottom-2 bg-custom-green hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">New Post</a>
                </div>
            </form>

            <h1 className="pt-5 text-l text-center">Ayo Bantu Pendonoran darah...</h1>

            <a href="/detail" className="flex w-full my-5 p-4 ps-10 text-sm border border-custom-green rounded-lg hover:bg-custom-grey1">
                <div className="w-4/5 ">
                    <h1 className="text-2xl pb-3 font-medium">Butuh 2liter Donor</h1>
                    <p className="text-xl text-justify">riski : saya sedang membutuhkan donoran darah 2 liter tipe B it. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at it. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, atit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at</p>
                </div>

                <div className="flex p-2 ml-44 bg-custom-grey1 w-auto h-10 rounded-lg  items-end self-end  ">
                    <img className="w-full pe-1" src="coment.png" />
                    <p className="text-xl">0</p>
                </div>
            </a>

            <a href="/detail" className="flex w-full my-5 p-4 ps-10 text-sm border border-custom-green rounded-lg hover:bg-custom-grey1">
                <div className="w-4/5 ">
                    <h1 className="text-2xl pb-3 font-medium">Butuh 2liter Donor</h1>
                    <p className="text-xl text-justify">riski : saya sedang membutuhkan donoran darah 2 liter tipe B it. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermeat</p>
                </div>

                <div className="flex p-2 ml-44 bg-custom-grey1 w-auto h-10 rounded-lg items-end self-end  ">
                    <img className="w-full pe-1" src="coment.png" />
                    <p className="text-xl">0</p>
                </div>
            </a>
        </div>
    )
}

export default Thread