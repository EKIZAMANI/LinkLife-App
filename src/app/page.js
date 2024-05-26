const Home = () => {
  return (
    <div>
      <div className="px-24 pb-16">
        <div className=" pt-12 flex justify-between">
          <div className="w-1/2">
            <h1 className="my-5 font-bold text-5xl text-custom-green">LinkLife: Setetes Darah, Ribuan Harapan
            </h1>
            <p className="my-5 text-2xl mb-10">LinkLife adalah tempat online yang mempertemukan para pemberi dan penerima darah untuk membentuk ikatan kehidupan. Kami berkomitmen untuk menciptakan platform yang memudahkan proses donasi darah, menyelamatkan nyawa, dan menyebarkan kebaikan di seluruh dunia</p>

            <a href="./thread"
              className="items-center text-2xl bg-custom-green hover:bg-slate-600 text-white font-medium py-3 px-10 rounded-3xl">
              Ayo Join
            </a>
          </div>
          <div class="flex justify-end">
            <img src="/main.png" class="w-4/5 self-end" />
          </div>

        </div>

        <div className="flex justify-center items-center my-32 p-5 bg-custom-grey1 rounded-full" id="about">
          <h1
            className="p-24 font-bold text-5xl text-custom-green bg-white rounded-l-full text-center">About
            LinkLife</h1>
          <p className=" text-2xl px-10 ">LinkLife hadir sebagai wadah digital yang menghubungkan individu yang ingin memberikan darah mereka dengan mereka yang membutuhkan. Dengan teknologi canggih dan jaringan luas, kami memfasilitasi pertemuan antara pemberi dan penerima darah, menginspirasi kepedulian, dan mengubah setiap tetes darah menjadi peluang untuk menyelamatkan hidup. </p>
        </div>

        <h1 className=" text-5xl font-bold text-custom-green center  text-center" id="instruction">Mekanisme</h1>
        <div className="  w-full flex justify-center items-center">

          {/* stack 1 */}
          <div className="pt-10 grid grid-cols-9 px-2">

            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full rounded-md p-2 md:pl-4">

                <p className="text-custom-green sm:text-l"> <span className="text-custom-green text-l font-bold py-2">Step 1. </span> Pengguna dimintai untuk login ke web LinkLife, jika belum mempunyai akun makan register terlebih dahulu dengan mengisi data seperti nama, alamat email dan nomor telepon.</p>
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

                <p className="text-custom-green sm:text-l "> <span className="text-custom-green text-l font-bold py-2">Step 2. </span> Setelah Login, pengguna dapat melihat halaman thread, jika ingin meminta donoran darah pengguna dapat menambahkan thread, jika ingin mendonorkan darah pengguna dapat membalas thread</p>
              </div>
            </div>

            {/* Stack 3 */}

            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full  rounded-md p-2 md:pl-4">

                <p className="text-custom-green sm:text-l"><span className="text-custom-green text-l font-bold py-2">Step 3. </span> Setelah melakukan permintaan ataupun balasan untuk donoran darah, pengguna dapat menunggu konfirmasi dari admin. Pendonor akan diminta datang ke lokasi PMI dan dilakukan pengambilan darah, setelah itu peminta akan di minta datang ke lokasi PMI untuk mengambil darah donoran tersebut.</p>
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
      <footer class="bg-custom-grey1 text-center lg:text-left">
        <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
          © 2023 Copyright:
          <a href="https://tw-elements.com/">LinkLife</a>
        </div>
      </footer>
    </div>
  )
}

export default Home