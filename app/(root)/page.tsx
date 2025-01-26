import AppDownloadButton from "@/components/AppDownloadButton";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Collections />
      <ProductList />
      <AppDownloadButton />
    </>
  );
}

export const dynamic = "force-dynamic";
