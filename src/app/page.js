"use client"
const Home = () => {
  if (localStorage.getItem('userRole') != 'admin') {
    return (
      <div>
        <div className="px-24 pb-16">
          <div className="flex justify-between pt-12 ">
            <div className="w-1/2">
              <h1 className="my-5 text-5xl font-bold text-custom-green">LinkLife: Setetes Darah, Ribuan Harapan
              </h1>
              <p className="my-5 mb-10 text-2xl">LinkLife adalah tempat online yang mempertemukan para pemberi dan penerima darah untuk membentuk ikatan kehidupan. Kami berkomitmen untuk menciptakan platform yang memudahkan proses donasi darah, menyelamatkan nyawa, dan menyebarkan kebaikan di seluruh dunia</p>

              <a href="./thread"
                className="items-center px-10 py-3 text-2xl font-medium text-white bg-custom-green hover:bg-slate-600 rounded-3xl">
                Ayo Join
              </a>
            </div>
            <div class="flex justify-end">
              <img src="/main.png" class="w-4/5 self-end" />
            </div>

          </div>

          <div className="flex items-center justify-center p-5 my-32 rounded-full bg-custom-grey1" id="about">
            <h1
              className="p-24 text-5xl font-bold text-center bg-white rounded-l-full text-custom-green">About
              LinkLife</h1>
            <p className="px-10 text-2xl ">LinkLife hadir sebagai wadah digital yang menghubungkan individu yang ingin memberikan darah mereka dengan mereka yang membutuhkan. Dengan teknologi canggih dan jaringan luas, kami memfasilitasi pertemuan antara pemberi dan penerima darah, menginspirasi kepedulian, dan mengubah setiap tetes darah menjadi peluang untuk menyelamatkan hidup. </p>
          </div>

          <h1 className="text-5xl font-bold text-center text-custom-green center" id="instruction">Mekanisme</h1>
          <div className="flex items-center justify-center w-full ">

            {/* stack 1 */}
            <div className="grid grid-cols-9 px-2 pt-10">

              <div className="w-full h-full col-span-4 ">
                <div className="w-full h-full p-2 rounded-md md:pl-4">

                  <p className="text-custom-green sm:text-l"> <span className="py-2 font-bold text-custom-green text-l">Step 1. </span> Pengguna dimintai untuk login ke web LinkLife, jika belum mempunyai akun makan register terlebih dahulu dengan mengisi data seperti nama, alamat email dan nomor telepon.</p>
                </div>
              </div>
              <div
                className="relative flex items-center justify-center w-full h-full col-span-1">
                <div className="w-1 h-full bg-custom-green"></div>
                <div
                  className="absolute z-10 w-4 h-4 text-center text-white rounded-full bg-custom-green"></div>
              </div>
              <div className="w-full h-full col-span-4"></div>

              {/* Stack 2 */}
              <div className="w-full h-full col-span-4"></div>
              <div
                className="relative flex items-center justify-center w-full h-full col-span-1">
                <div className="w-1 h-full bg-custom-green"></div>
                <div
                  className="absolute z-10 w-4 h-4 text-center text-white rounded-full bg-custom-green"></div>
              </div>
              <div className="w-full h-full col-span-4 ">
                <div className="w-full h-full p-2 rounded-md md:pl-4">

                  <p className="text-custom-green sm:text-l "> <span className="py-2 font-bold text-custom-green text-l">Step 2. </span> Setelah Login, pengguna dapat melihat halaman thread, jika ingin meminta donoran darah pengguna dapat menambahkan thread, jika ingin mendonorkan darah pengguna dapat membalas thread</p>
                </div>
              </div>

              {/* Stack 3 */}

              <div className="w-full h-full col-span-4 ">
                <div className="w-full h-full p-2 rounded-md md:pl-4">

                  <p className="text-custom-green sm:text-l"><span className="py-2 font-bold text-custom-green text-l">Step 3. </span> Setelah melakukan permintaan ataupun balasan untuk donoran darah, pengguna dapat menunggu konfirmasi dari admin. Pendonor akan diminta datang ke lokasi PMI dan dilakukan pengambilan darah, setelah itu peminta akan di minta datang ke lokasi PMI untuk mengambil darah donoran tersebut.</p>
                </div>
              </div>
              <div
                className="relative flex items-center justify-center w-full h-full col-span-1">
                <div className="w-1 h-full bg-custom-green"></div>
                <div
                  className="absolute z-10 w-4 h-4 text-center text-white rounded-full bg-custom-green"></div>
              </div>
              <div className="w-full h-full col-span-4"></div>
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
  } else {
    window.location.href = '/login'
  }
}

export default Home