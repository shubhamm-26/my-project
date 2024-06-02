import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen bg-black text-white">
      <Navbar />
      <div className="relative w-full h-full z-0">
        <Image
          src="/home.png"
          alt="home"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-40">
          <h1 className="text-8xl font-bold text-white">
            MAKING <br />
            <span className="text-orange-500">Snack Time</span> <br />
            A BREEZE.
          </h1>
        </div>
      </div>
      <div className="h-40 flex bg-secondary-200">
        <div className="flex items-center justify-center basis-1/3 bg-orange-500 text-center">
          <h1 className="text-4xl font-bold p-8">Our Trusted<br></br> Partners</h1>
        </div>
      </div>
      <div className="h-screen bg-white"></div>
      <Footer />
    </main>
  );
}


