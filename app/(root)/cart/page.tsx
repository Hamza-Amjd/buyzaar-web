"use client";

import useCart from "@/lib/hooks/useCart";
import { numberWithCommas } from "@/utils/healper";
import cartanim from "@/public/emptycart.json";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Lottie from "lottie-react";
import { MinusCircle, PlusCircle, Trash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };
  
  const handleCheckout = async () => {
      if (!user) {
        router.push("sign-in");
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, { cartItems: cart.cartItems, customer }).then((res)=>{console.log(res.data.url);window.location.href = res.data.url}).catch(err=>console.log(err))
      }
  };

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Shopping Cart</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <div className="text-body-semibold flex flex-col justify-center items-center gap-4 py-8">
          <Lottie animationData={cartanim} loop={false} className="w-64 h-64"/>
          <p >No items in your Cart</p>
        </div>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex relative hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between mb-1">
                <div className="flex items-center">
                  <Link href={`/products/${cartItem.item._id}`}>
                    <Image
                      src={cartItem.item.media[0]}
                      width={100}
                      height={100}
                      className="rounded-lg w-32 min-w-32 h-32 object-cover"
                      alt="product"
                    />
                  </Link>
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-base-bold sm:text-body-bold">{cartItem.item.title}</p>
                    <div className="flex gap-1">
                    {cartItem.color && (
                      <p className="text-small-medium capitalize">{cartItem.color}</p>
                    )}
                    
                    {cartItem.size && (
                      <p className="text-small-medium capitalize">|  {cartItem.size}</p>
                    )}

                    </div>
                    
                    <p className="text-small-medium">
                      Rs. {numberWithCommas(cartItem.item.price)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center max-sm:absolute max-sm:bottom-4 max-sm:right-4">
                  <MinusCircle
                    className="hover:text-orange-700 cursor-pointer"
                    onClick={() => {
                      if (cartItem.quantity == 1)
                        cart.removeItem(cartItem.item._id);
                      else cart.decreaseQuantity(cartItem.item._id);
                    }}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-orange-700 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <X
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-2 bg-grey-1 rounded-lg px-4 py-5 justify-between">
      <div>
        <p className="text-heading4-bold pb-4">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between text-base-medium text-gray-600 py-4">
          <span>Subtotal</span>
          <span>Rs. {numberWithCommas(totalRounded)}</span>
        </div>
        <div className="flex justify-between text-base-medium text-gray-600 border-t-[0.8px] py-4 border-gray-400">
          <span>Shipping Charges</span>
          <span>Rs. 0</span>
        </div>
        <div className="flex justify-between text-body-semibold border-t-[0.8px] py-4 border-gray-400">
          <span>Total Amount</span>
          <span>Rs. {numberWithCommas(totalRounded)}</span>
        </div>
      </div>
        <button
          className="border rounded-lg text-body-bold bg-orange-600 py-3 w-full transition-all ease-in active:scale-95 hover:bg-orange-600/50 text-white"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
