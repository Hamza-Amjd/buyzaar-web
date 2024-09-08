"use client"
import ProductCard from "@/components/ProductCard"
import useCart from "@/lib/hooks/useCart"
import Lottie from "lottie-react";
import cartbox from "@/public/emptybox.json";

const Wishlist = () => {
  const cart = useCart();
  return (
    <div className="px-0 py-1">
      <h1 className="text-heading2-bold my-10 mx-4">Your Wishlist</h1>
      {cart.wishlist.length === 0 && (
        <div className="text-body-semibold text-red-900 flex flex-col justify-center items-center gap-4 pb-24">
          <Lottie animationData={cartbox} loop={false} className="w-64 h-64"/>
          <p >No items in your wishlist</p>
        </div>
      )}

      <div className="flex flex-wrap justify-evenly gap-6 sm:gap-10 mx-auto mt-8">
        {cart.wishlist.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Wishlist