"use client";
import React, { useState } from "react";
import { numberWithCommas } from "@/utils/healper";
import { CheckCircle, CircleEllipsis} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OrderCard = ({ order }: { order: OrderType }) => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  return (
    <div
      className="flex flex-col gap-4 border-gray-300 border-[0.5px] rounded-lg"
      key={order._id}
    >
      <div className="flex justify-between items-center border-gray-300 border-b-[0.5px] py-4 p-2">
        <div className="flex gap-5 items-center text-center ">
          <span className="hidden md:flex flex-col">
            <p className="text-base-bold pb-1">Order ID</p>
            <p className="text-small-medium">{order._id}</p>
          </span>
          <span>
            <p className="text-base-bold pb-1">Order Placed</p>
            <p className="text-small-medium">
              {new Date(order.createdAt).toDateString()}
            </p>
          </span>
          <span>
            <p className="text-base-bold pb-1">Total Amount</p>
            <p className="text-small-medium">
              Rs. {numberWithCommas(order.totalAmount)}
            </p>
          </span>
        </div>
        <div className="md:hidden relative">
          <CircleEllipsis
            className="hover:text-blue-700"
            onClick={() => dropdownOpen === order._id ? setDropdownOpen(null) : setDropdownOpen(order._id)}
          />
          {dropdownOpen === order._id && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  View Order
                </button>
                <button disabled className="block w-full text-left px-4 py-2 text-sm text-gray-600">
                  View Invoice
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="md:flex gap-4 hidden">
          <Link href={`/orders/${order._id}`} className="p-2 border-slate-800 border-[1px] rounded-md text-small-medium hover:bg-grey-1">
            View Order
          </Link>
          <button className="p-2 border-slate-500 border-[1px] rounded-md text-slate-600 text-small-medium">
            View Invoice
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {order.products.map((orderItem: OrderItemType) => (
          <div className="border-gray-300 border-b-[0.5px]">
            <div className="flex gap-4 p-4">
              <Image
                src={orderItem.product.media[0]}
                alt={orderItem.product.title}
                width={100}
                height={100}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <p className="text-base-medium">
                  Title:{" "}
                  <span className="text-base-medium ">
                    {orderItem.product.title}
                  </span>
                </p>
                {orderItem.color && (
                  <span className="text-base-medium capitalize">
                    {orderItem.color}
                  </span>
                )}
                {orderItem.size !== "N/A" && (
                  <span className="text-base-medium capitalize">
                    {orderItem.size}
                  </span>
                )}
                <p className="text-base-medium">
                  Rs. {numberWithCommas(orderItem.product.price)}
                </p>
                <p className="text-small-medium">
                  Quantity:{" "}
                  <span className="text-small-bold">{orderItem.quantity}</span>
                </p>
              </div>
            </div>
            <div className="sm:flex sm:justify-between p-4 pt-0 gap-4">
              <div className="flex gap-2">
                <CheckCircle color="green" />
                <p>Delivered on {new Date(order.createdAt).toDateString()}</p>
              </div>
              <div className="flex gap-4 justify-evenly sm:justify-center pt-4 sm:pt-0">
                <Link
                  href={`/products/${orderItem.product._id}`}
                  className="text-base-bold text-blue-800 hover:text-blue-500"
                >
                  View Product
                </Link>
                <Link
                  href={`/orders/${orderItem._id}`}
                  className="text-base-bold text-blue-800 hover:text-blue-500"
                >
                  Track Delivery
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
