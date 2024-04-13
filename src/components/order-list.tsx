'use client';

import Image from "next/image";

import useCartService from "contexts/shop-context";

export default function OrderList() {

  const { orderItems } = useCartService();

  return (
    <ul className="w-full flex flex-col">
      {orderItems.length === 0 && (
        <p className="font-pokova text-xl text-center text-gray-600/60">
          No orders in the cart.
        </p>
      )}
      {orderItems.map((orderItem) => (
        <li
          key={orderItem.product_id}
          className="w-full flex items-start border-b-2 py-8 border-b-gray-600/20"
        >
          <Image
            src={orderItem.imageUrl}
            width={100}
            height={125}
            alt={orderItem.name}
            className="border rounded-lg"
          />
          <div className="w-full min-h-28 px-5 flex flex-col md:flex-row justify-between md:justify-start items-center md:items-start">
            <div className="w-full md:w-1/2">
              <h5 className="font-pokova font-semibold text-base">
                {orderItem.name}
              </h5>
              <h5 className="font-pokova text-gray-600/70 text-base">
                {orderItem.color.charAt(0).toUpperCase() +
                  orderItem.color.slice(1)}
              </h5>
              <h5 className="font-pokova font-semibold text-base">
                ${orderItem.price}
              </h5>
            </div>
            <div className="w-full md:w-10 md:min-h-28 flex items-start justify-start">
              <select
                name="quantity"
                defaultValue={orderItem.quantity}
                id="quantity"
                className="w-10 p-1 border border-gray-900/20 rounded-md"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
          <button>
            <Image src={"/x.svg"} width={30} height={30} alt="x" />
          </button>
        </li>
      ))}
    </ul>
  );
}
