import { getOrders } from "@/lib/actions/actions";
import { numberWithCommas } from "@/utils/healper";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import {
  CheckCircle,
  CircleEllipsis,
} from "lucide-react";
import Link from "next/link";
import OrderCard from "@/components/OrderCard";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

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
          <OrderCard key={order._id} order={order} /> 
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
