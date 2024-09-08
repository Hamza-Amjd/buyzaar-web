import { getOrders } from "@/lib/actions/actions";
import { numberWithCommas } from "@/utils/healper";
import cartbox from "@/public/emptybox.json";
import { auth } from "@clerk/nextjs";
import Lottie from "lottie-react";
import Image from "next/image";
import {
  CheckCircle,
  CircleEllipsis,
  Eclipse,
  Option,
  OptionIcon,
  ShieldEllipsis,
} from "lucide-react";
import Link from "next/link";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);
  console.log("🚀 ~ Orders ~ orders:", orders);

  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading2-bold my-10">Your Orders</p>
      {!orders ||
        (orders.length === 0 && (
          <div className="text-body-semibold flex flex-col justify-center items-center gap-4 pb-24">
            <p>No Orders Placed</p>
          </div>
        ))}

      <div className="flex flex-col gap-10">
        {orders?.map((order: OrderType) => (
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
              <div  className="md:hidden relative">
                <button className=" hover:text-blue-700 ">
                  <CircleEllipsis />
                </button>
                <div className="absolute right-0 w-[110px] items-start text-small-medium bg-white p-2 gap-2 shadow-md rounded-lg  flex-col hidden">
                  <button className=" hover:text-blue-700 ">View Order</button>
                  <button className=" hover:text-blue-700 ">View Invoice</button>
                </div>
              </div>
              <div className="md:flex gap-4 hidden">
                <button className="p-2 border-slate-800 border-[1px] rounded-md text-small-medium hover:bg-grey-1">
                  View Order
                </button>
                <button className="p-2 border-slate-800 border-[1px] rounded-md text-small-medium hover:bg-grey-1">
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
                        <span className="text-small-bold">
                          {orderItem.quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex sm:justify-between p-4 pt-0 gap-4">
                    <div className="flex gap-2">
                      <CheckCircle color="green" />
                      <p>
                        Delivered on {new Date(order.createdAt).toDateString()}
                      </p>
                    </div>
                    <div className="flex gap-4 justify-evenly sm:justify-center pt-4 sm:pt-0">
                      <Link
                        href={`/products/${orderItem.product._id}`}
                        className="text-base-bold text-blue-800 hover:text-blue-500"
                      >
                        View Product
                      </Link>
                      <Link
                        href={"#"}
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
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
