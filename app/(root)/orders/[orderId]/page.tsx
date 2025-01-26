"use server"
import { getOrderDetails } from '@/lib/actions/actions';
import { Truck, Package, CheckCircle } from 'lucide-react'

const TrackOrderPage=async({ params }: { params: { orderId: string }})=> {
  const order=await getOrderDetails(params.orderId);
  const orderDetails=order.orderDetails
  const date=new Date(orderDetails.createdAt)
  const addDays=(days:number)=>{
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000)
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
        
        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order # {params.orderId.slice(4,8)}</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <p className="text-gray-600">Ordered on:</p>
              <p className="font-medium">{date.toLocaleDateString()}</p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="text-gray-600">Estimated Delivery:</p>
              <p className="font-medium">{addDays(7).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        
        {/* Customer */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Name:</p>
              <p className="font-medium">{orderDetails.shippingAddress.name}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Phone number:</p>
              <p className="font-medium">{orderDetails.shippingAddress.phone}</p>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Tracking Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="font-medium">Order Placed</p>
                <p className="text-sm text-gray-500">{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Package className="h-8 w-8 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="font-medium">Order Confirmed</p>
                <p className="text-sm text-gray-500">{addDays(7).toLocaleDateString()} - 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-center opacity-50">
              <div className="flex-shrink-0">
                <Truck className="h-8 w-8 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="font-medium">Out for Delivery</p>
                <p className="text-sm text-gray-500">Estimated: {addDays(15).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estimated Delivery */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Estimated Delivery</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Delivery Address:</p>
              <p className="font-medium">{orderDetails.shippingAddress.line1}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Estimated Date:</p>
              <p className="font-medium">{addDays(15).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TrackOrderPage;