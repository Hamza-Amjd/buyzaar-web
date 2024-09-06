"use client";

import Image from "next/image";
import Link from "next/link";
import { numberWithCommas } from "@/utils/healper";
import WishlistButton from "./WishlistButton";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[160px] sm:w-[250px]  flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={260}
        className="h-[160px] sm:h-[260px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{product.title.length>25?product.title.slice(0,25):product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">Rs. {numberWithCommas(product.price)}</p>
        <WishlistButton product={product} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
  );
};

export default ProductCard;
