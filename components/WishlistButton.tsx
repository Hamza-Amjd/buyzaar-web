"use client"

import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Bookmark, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WishlistButtonProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const WishlistButton = ({ product, updateSignedInUser }: WishlistButtonProps) => {
  const router = useRouter();
  const { user } = useUser();
  const cart= useCart();

  // const getUser = async () => {
  //   try {
  //     setLoading(true);
  //     await axios.get("/api/users").then((response) =>{setIsLiked(response.data.wishlist.includes(product._id))}).catch((error) =>(console.error(error))).finally(()=>setLoading(false));
  //   } catch (err) {
  //     console.log("[users_GET]", err);
  //   }
  // };

  // useEffect(() => {
  //   if (user) {
  //     getUser();
  //   }
  // }, [user]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        // await axios.post("/api/users/wishlist",{ product: product._id }).then(response=>{updateSignedInUser && updateSignedInUser(response.data)})
      }
      cart.toggleWishlist(product)
  };

  return (
    <button onClick={handleLike}>
      <Bookmark fill={`${cart.wishlist.some((value: any) => value._id == product._id) ? "orange" : "white"}`} />
    </button>
  );
};

export default WishlistButton;
