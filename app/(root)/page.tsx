import AppDownloadButton from "@/components/AppDownloadButton";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Collections />
      <ProductList />
      <div className="fixed bottom-8 right-8">
        <AppDownloadButton />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
