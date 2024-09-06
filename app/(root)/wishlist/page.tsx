"use client"
import ProductCard from "@/components/ProductCard"
import useCart from "@/lib/hooks/useCart"

const Wishlist = () => {
  const cart = useCart();


  return (
    <div className="px-0 py-1">
      <h1 className="text-heading2-bold my-10 mx-4">Your Wishlist</h1>
      {cart.wishlist.length === 0 && (
        <p className="text-base-medium text-center">No items in your wishlist</p>
      )}

      <div className="flex flex-wrap justify-center  gap-6 sm:gap-10 mx-auto mt-8">
        {cart.wishlist.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Wishlist