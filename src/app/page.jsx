import Image from "next/image";
import logo from "../../public/formfolio.svg";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="max-[1200px]:px-[5%]">
      <div className="flex justify-center">
        <Image
          className="pt-[70px] md:pt-[35px] w-[120px] min-[1400px]:w-[7.79%]"
          src={logo}
          alt="FromFolio Logo"
          priority
        />
      </div>
      <div className="w-full flex justify-center px-[11.3%] max-[1400px]:px-[0] max-[768px]:h-[calc(100vh_-_100px)] min-[768px]:h-[calc(100vh_-_65px)] pt-[2.5%]">
        <div className="pattern">
          <div>
            <h1 className="text-[#1D252C] font-tt-hoves text-center text-[6em] max-[1422px]:text-[5em] max-[1200px]:text-[4.3em] max-[992px]:text-[3.1em] max-[576px]:text-[2.5em] max-[400px]:text-[2.1em] font-ttHovesNormal uppercase leading-[107%]">
              Our Design Platform
            </h1>
            <p className="text-[#1D252C] italic text-center text-[6em] max-[1422px]:text-[5em] max-[1200px]:text-[4.3em] max-[992px]:text-[3.1em] max-[576px]:text-[2.5em] max-[400px]:text-[2.1em] font-ttHovesThinItalic uppercase leading-[107%]">
              coming soon
            </p>
            <p className="text-center text-[#23282d] font-ttHovesNormal pt-[4%] text-[1.12em] max-[768px]:text-[1em] max-[768px]:py-[15px] max-[576px]:text-[14px]">
              Subscribe to be the first to know about us!
            </p>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
