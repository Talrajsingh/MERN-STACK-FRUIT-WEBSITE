import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { currency } = useAppContext();

  const fetchMyOrder = async () => {
    setMyOrder(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {myOrder.map((order, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          {/* Order Info */}
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col gap-2 mb-4">
            <span>Order ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>
              Total Amount: {currency}
              {order.amount}
            </span>
          </p>

          {/* Items */}
          {order.items.map((item, i) => (
            <div
              key={i}
              className={`relative bg-white text-gray-500/70 ${
                order.items.length !== i + 1 && "border-b"
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}
            >
              {/* Left: Image + Product Info */}
              <div className="flex items-center">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <img
                    src={item.product.image?.[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-800">
                    {item.product.name}
                  </h2>
                  <p>Category: {item.product.category}</p>
                </div>
              </div>

              {/* Middle: Order Details */}
              <div className="text-primary text-lg font-medium flex flex-col gap-1">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>
                  Date: {new Date(order.createdAt).toLocaleDateString("en-IN")}
                </p>
              </div>

              {/* Right: Amount */}
              <p className="text-primary text-lg font-semibold">
                Amount: {currency}
                {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
