"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/fromfolio_logo_black_PNG.png";
import Form from "@/components/Form";
import Notification from "@/components/Notification";

export default function Home() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);
  
  return (
    <main className="relative">
      <div className="max-[1200px]:px-[5%] bg-white"></div>
      <div className="flex justify-center">
        <Image
          className="pt-[70px] md:pt-[35px] w-[120px] min-[1400px]:w-[7.79%]"
          src={logo}
          alt="FromFolio Logo"
          priority
        />
      </div>
      <div className="w-full flex px-[11.3%] max-[1400px]:px-[0] max-[768px]:h-[calc(100vh_-_100px)] min-[768px]:h-[calc(100vh_-_65px)] pt-[2.5%]">
        <div className="pattern">
          <div>
            <h1 className="text-[#1D252C] font-tt-hoves text-center text-[6em] max-[1422px]:text-[5em] max-[1200px]:text-[4.3em] max-[992px]:text-[3.1em] max-[576px]:text-[40px] max-[576px]:pb-[30px] font-ttHovesNormal uppercase leading-[107%]">
              Our Design Platform
            </h1>
            <p className="text-[#1D252C] italic text-center text-[6em] max-[1422px]:text-[5em] max-[1200px]:text-[4.3em] max-[992px]:text-[3.1em] max-[576px]:text-[40px] max-[576px]:pb-[40px] font-ttHovesThinItalic uppercase leading-[107%] max-[576px]:px-[10%]">
              coming soon
            </p>
            <p className="text-center text-[#23282d] font-ttHovesNormal pt-[4%] text-[1.12em] max-[768px]:text-[1em] max-[768px]:py-[15px] max-[576px]:px-[25%]">
              Subscribe to be the first to know about us!
            </p>
          </div>
          <Form setStatus={setStatus} />
        </div>
      </div>
      {status && <Notification setStatus={setStatus} />}
    </main>
  );
}
