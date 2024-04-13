import CheckoutSection from "@/components/checkout-section";
import OrderList from "@/components/order-list";


export default function ShoppingCart() {
  return (
    <main className="w-full py-5 px-5 flex flex-col justify-start items-center gap-y-8">
      <h1 className="w-full text-left font-pokova text-4xl">Shopping Cart</h1>
      <div className="w-full h-[2px] bg-gray-600/20" />
      <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-x-10">
        <OrderList />
        <CheckoutSection />
      </div>
    </main>
  );
}
