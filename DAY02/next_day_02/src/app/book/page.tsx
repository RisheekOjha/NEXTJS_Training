import React from "react";
import WhiteTiger from "../../../public/WHITE TIGER coding.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex">
      {/* <img src={WhiteTiger.blurDataURL}  alt="" width={500} /> */}
      <Image
        src={WhiteTiger}
        alt="Profile"
        blurDataURL={WhiteTiger.blurDataURL}
      ></Image>
      {/* <Image src={WhiteTiger.src} alt='tiger' height={100} width={100}></Image> */}
      <div style={{ width: "800px", height: "800px", position: "relative" }}
      className="flex-auto">
        <Image
          src={
            "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="work"
          fill
        ></Image>
      </div>
    </div>
  );
}
