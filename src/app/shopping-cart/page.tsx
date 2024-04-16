import CheckoutSection from "@/components/checkout-section";
import OrderList from "@/components/order-list";


export default function ShoppingCart() {
  return (
    <main className="w-full min-h-screen py-5 px-5 sm:px-10 sm:py-10 md:px-24 md:py-16 lg:px-36 flex flex-col justify-start items-center gap-y-8">
      <h1 className="w-full text-left font-pokova text-4xl">Shopping Cart</h1>
      <div className="w-full h-[2px] bg-gray-600/20" />
      <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-x-10">
        <OrderList />
        <CheckoutSection />
      </div>
    </main>
  );
}
