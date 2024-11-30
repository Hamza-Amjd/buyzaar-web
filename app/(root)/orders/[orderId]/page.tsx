import { Truck, Package, CheckCircle } from 'lucide-react'

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
        
        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order #12345</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <p className="text-gray-600">Ordered on:</p>
              <p className="font-medium">May 15, 2023</p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="text-gray-600">Estimated Delivery:</p>
              <p className="font-medium">May 20, 2023</p>
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
                <p className="text-sm text-gray-500">May 15, 2023 - 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Package className="h-8 w-8 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="font-medium">Order Shipped</p>
                <p className="text-sm text-gray-500">May 17, 2023 - 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-center opacity-50">
              <div className="flex-shrink-0">
                <Truck className="h-8 w-8 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="font-medium">Out for Delivery</p>
                <p className="text-sm text-gray-500">Estimated: May 20, 2023</p>
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
              <p className="font-medium">123 Main St, Anytown, USA 12345</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Estimated Date:</p>
              <p className="font-medium">May 20, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

