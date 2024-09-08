"use client";
import { XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AppDownloadButton = () => {
  const [showDownload, setShowDownload] = useState(true);
  return (
    <div className={`w-42 h-20 ${showDownload ? "" : "hidden"} `}>
      <XCircle
        size={27}
        onClick={() => {
          setShowDownload(false);
        }}
        className="absolute right-0 top-0 z-10 cursor-pointer"
        fill="red"
        stroke="white"
      />
      <Link href={"/buyzaar.apk"}>
        <Image
          src="/download1.png"
          alt="app download"
          height={150}
          width={250}
          className="transition-all ease-in-out cursor-pointer hover:scale-110 active:scale-90"
        />
      </Link>
    </div>
  );
};

export default AppDownloadButton;
