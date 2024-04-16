"use client";

import toast from "react-hot-toast";
import useCartService from "contexts/shop-context";

export default function CheckoutSection() {

  const { totalPrice, orderItems, clearCart } = useCartService();

  const handleCheckout = () => {
    clearCart();
    toast.success('Completed purchase');
  }

  return (
    <>
      {orderItems.length !== 0 && (
        <section className="w-full h-96 flex flex-col justify-center px-5 bg-gray-400/10 rounded-md">
          <h2 className="font-pokova text-2xl">Order Summary</h2>
          <div className="w-full flex justify-between border-b-2 py-4 border-b-gray-600/20">
            <h5 className="font-pokova text-lg text-gray-700/60">Subtotal</h5>
            <h5 className="font-pokova text-lg">${totalPrice}</h5>
          </div>
          <div className="w-full flex justify-between border-b-2 py-4 border-b-gray-600/20">
            <h5 className="font-pokova text-lg text-gray-700/60">
              Shipping estimate
            </h5>
            <h5 className="font-pokova text-lg">$5</h5>
          </div>
          <div className="w-full flex justify-between border-b-2 py-4 border-b-gray-600/20">
            <h5 className="font-pokova text-lg text-gray-700/60">
              Tax estimate
            </h5>
            <h5 className="font-pokova text-lg">$7</h5>
          </div>
          <div className="w-full flex justify-between py-4 border-b-gray-600/20">
            <h5 className="font-pokova text-2xl text-gray-700/60">
              Order Total
            </h5>
            <h5 className="font-pokova text-lg">${totalPrice + 5 + 7}</h5>
          </div>
          <button
            className="bg-primary hover:bg-[#DB63C5] active:bg-[#DB63C5] active:scale-105 py-2 text-white font-pokova text-xl rounded-lg transition-transform"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </section>
      )}
    </>
  );
}
