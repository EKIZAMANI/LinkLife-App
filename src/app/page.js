const Home = () => {
  return  (
    <div className="px-24 pb-16">
      <div className=" pt-12 flex justify-between">
        <div className="w-1/2">
          <h1 className="my-5 font-bold text-5xl text-custom-green">Providing
            Industry
            Leading Solutions for
          </h1>
          <p className="my-5 text-2xl">Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit. Habitant cras
            morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non
            vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at
            sed cras nisi.</p>
          <p className="my-5 text-2xl">Lorem ipsum dolor sit amet consectetur
            adipisicingelit.
            Ut
            quibusdam ducimus quidem quae voluptates numquam maxime possimus illum
            eveniet vitae reiciendis quasi, fugiat assumenda veritatis nam culpa in!
            Quo, dolorum.</p>
          <a href="./thread"
            className="items-center text-2xl bg-custom-green hover:bg-slate-600 text-white font-medium py-3 px-10 rounded-3xl">
            Ayo Join
          </a>
        </div>
        <div class="flex justify-end">
          <img src="/main.png" class="w-4/5 self-end" />
        </div>

      </div>

      <div className="my-32 p-5 bg-custom-grey1 flex rounded-full " id="about">
        <h1
          className="p-24 w-3/4 font-bold text-5xl text-custom-green w-1/2 bg-white rounded-l-full">About
          Company</h1>
        <p className="p-24 text-2xl ">Link Life adalah aplikasi yang dapat Lorem
          ipsum dolor sit amet,
          consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum
          nec lorem eget dictumst. Risus in gravida eu, enim lorem. </p>
      </div>

      <h1 className=" text-5xl font-bold text-custom-green center  text-center" id="instruction">Mekanisme</h1>
      <div className="  w-full flex justify-center items-center">

        {/* stack 1 */}
        <div className="pt-10 grid grid-cols-9 px-2">

          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full rounded-md p-2 md:pl-4">

              <p className="text-custom-green sm:text-l"> <span className="text-custom-green text-l font-bold py-2">Step 1. </span> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sunt corporis consequuntur
                voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam
                ullam, reprehenderit ratione pariatur accusamus suscipit odit
                nostrum?</p>
            </div>
          </div>
          <div
            className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-custom-green"></div>
            <div
              className="absolute w-4 h-4 rounded-full bg-custom-green z-10 text-white text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* Stack 2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div
            className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-custom-green"></div>
            <div
              className="absolute w-4 h-4 rounded-full bg-custom-green z-10 text-white text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full  rounded-md p-2 md:pl-4">

              <p className="text-custom-green sm:text-l "> <span className="text-custom-green text-l font-bold py-2">Step 2. </span> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sunt corporis consequuntur
                voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam
                ullam, reprehenderit ratione pariatur accusamus suscipit odit
                nostrum?</p>
            </div>
          </div>

          {/* Stack 3 */}

          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full  rounded-md p-2 md:pl-4">

              <p className="text-custom-green sm:text-l"><span className="text-custom-green text-l font-bold py-2">Step 3. </span> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sunt corporis consequuntur
                voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam
                ullam, reprehenderit ratione pariatur accusamus suscipit odit
                nostrum?</p>
            </div>
          </div>
          <div
            className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-custom-green"></div>
            <div
              className="absolute w-4 h-4 rounded-full bg-custom-green z-10 text-white text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>

      </div>
    </div>
  )
}

export default Home