import AppDownloadButton from "@/components/AppDownloadButton";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" /> */}
      <Collections />
      <ProductList />
      <div className="fixed bottom-4 right-4">
        <AppDownloadButton />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
