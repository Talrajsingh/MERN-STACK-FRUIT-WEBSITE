import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[calc(100vh-64px)] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>

        {orders.map((order, index) => {
          const firstItem = order.items[0];
          const moreCount = order.items.length - 1;

          return (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800 bg-white"
            >
              {/* Product Info */}
              <div className="flex gap-5">
                <img
                  className="w-12 h-12 object-cover opacity-70"
                  src={assets.box_icon}
                  alt="boxIcon"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-medium">
                    {firstItem.product.name}{" "}
                    <span className="text-primary">x {firstItem.quantity}</span>
                  </p>
                  {moreCount > 0 && (
                    <p className="text-sm text-gray-500">+ {moreCount} more item(s)</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="text-sm md:text-base text-black/60">
                <p className="font-medium mb-1">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p>
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state} {order.address.zipcode},{" "}
                  {order.address.country}
                </p>
                <p>{order.address.phone}</p>
              </div>

              {/* Amount */}
              <p className="font-medium text-lg my-auto">
                {currency}
                {order.amount}
              </p>

              {/* Payment Info */}
              <div className="flex flex-col text-sm md:text-base">
                <p>Method: {order.paymentType}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                <p>
                  Payment:{" "}
                  <span
                    className={`font-semibold ${
                      order.isPaid ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
