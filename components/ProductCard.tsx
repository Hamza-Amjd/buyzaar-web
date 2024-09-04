"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { numberWithCommas } from "@/utils/healper";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[160px] sm:w-[240px]  flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={240}
        height={260}
        className="h-[180px] sm:h-[260px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{product.title.length>25?product.title.slice(0,25):product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">Rs. {numberWithCommas(product.price)}</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
  );
};

export default ProductCard;
