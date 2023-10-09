import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ShoppingCart } from "lucide-react";

import OrderItem from "../components/order-item";
import { ShopContext } from "../contexts/shop-context";
import { Order } from "../../types";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  country: string;
  stateOrProvince: string;
  postalCode: string;
  phone: string;
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
}

function Cart() {

  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      country: '',
      stateOrProvince: '',
      postalCode: '',
      phone: '',
      nameOnCard: '',
      expirationDate: '',
      cvc: ''
    }
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit = () => {
    console.log("Got submission");
  }

  const { cartItems } = useContext(ShopContext);

  const items = cartItems.values();
  let orders: Order[] = [];

  for (const item of items) {
    for (let i = 0; i < item?.length; i += 1) orders.push(item[i]);
  }

  const subtotal = orders.reduce(
    (accumulator, order) =>
      accumulator + parseFloat(order.price) * Number(order.quantity),
    0
  );

  const taxes = 2;
  const shipping = 5;
  const total = subtotal + taxes + shipping;

  return (
    <form
      className="w-full lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col lg:flex-row lg:gap-x-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {orders.length > 0 ? (
        <>
          <div className="w-full flex flex-col gap-y-10">
            <div className="pb-10 border-b">
              <h1 className="font-lexend text-2xl">Contact information</h1>
              <div className="mt-4 rounded-md shadow-sm">
                <label
                  htmlFor="email"
                  className="block text-sm font-lexend text-gray-900 pb-2"
                >
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && "email is required"}
              </div>
            </div>
            <div className="pb-10 border-b">
              <div className="flex flex-col gap-y-4">
                <h1 className="font-lexend text-2xl">Shipping information</h1>
                <div className="flex flex-row gap-x-4">
                  <div className="w-full rounded-md shadow-sm">
                    <label
                      htmlFor="first name"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first name"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && "first name is required"}
                  </div>
                  <div className="w-full rounded-md shadow-sm">
                    <label
                      htmlFor="last name"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last name"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && "last name is required"}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-lexend text-gray-900 pb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && "address is required"}
                </div>
                <div>
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-lexend text-gray-900 pb-2"
                  >
                    Apartment, suite, etc.
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                    {...register("apartment", {
                      required: false,
                    })}
                  />
                </div>
                <div className="flex flex-row gap-x-4">
                  <div className="w-full rounded-md shadow-sm">
                    <label
                      htmlFor="city"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && "city is required"}
                  </div>
                  <div className="w-full rounded-md shadow-sm">
                    <label
                      htmlFor="country"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("country", {
                        required: "Country is required",
                      })}
                    />
                    {errors.country && "country is required"}
                  </div>
                </div>
                <div className="flex flex-row gap-x-4">
                  <div className="w-full rounded-md shadow-sm">
                    <label
                      htmlFor="state/province"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state/province"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("stateOrProvince", {
                        required: "State / Province is required",
                      })}
                    />
                    {errors.stateOrProvince && "State / Province is required"}
                  </div>
                  <div className="w-full rounded-md shadow-sm">
                    <label
                      htmlFor="postal code"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postal code"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("postalCode", {
                        required: "Postal Code is required",
                      })}
                    />
                    {errors.postalCode && "Postal Code is required"}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-lexend text-gray-900 pb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && "Phone number is required"}
                </div>
              </div>
            </div>
            <div className="pb-10">
              <h1 className="font-lexend text-2xl">Payment details</h1>
              <div className="flex flex-col gap-y-4">
                <div>
                  <div className="mt-4 rounded-md shadow-sm">
                    <label
                      htmlFor="card name"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      Name on card
                    </label>
                    <input
                      type="text"
                      id="card name"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("nameOnCard", {
                        required: "Card Name is required",
                      })}
                    />
                    {errors.nameOnCard && "Card Name is required"}
                  </div>
                  <div className="mt-4 rounded-md shadow-sm">
                    <label
                      htmlFor="card number"
                      className="block text-sm font-lexend text-gray-900 pb-2"
                    >
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card number"
                      className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                      {...register("cardNumber", {
                        required: "Card Number is required",
                      })}
                    />
                    {errors.cardNumber && "Card Number is required"}
                  </div>
                  <div className="flex flex-row gap-x-4">
                    <div className="mt-4 w-[90%] rounded-md shadow-sm">
                      <label
                        htmlFor="expiration date"
                        className="block text-sm font-lexend text-gray-900 pb-2"
                      >
                        Expiration date {`(MM/YY)`}
                      </label>
                      <input
                        type="text"
                        id="expiration date"
                        className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                        {...register("expirationDate", {
                          required: "Email is required",
                        })}
                      />
                      {errors.expirationDate && "Expiration Date is required"}
                    </div>
                    <div className="mt-4 rounded-md shadow-sm">
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-lexend text-gray-900 pb-2"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                        {...register("cvc", {
                          required: "CVC is required",
                        })}
                      />
                      {errors.cvc && "CVC is required"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md">
            <h1 className="font-lexend text-2xl">Order summary</h1>
            <div className="w-full mt-5 flex flex-col bg-white border rounded-md">
              {orders.map((order, i) => (
                <OrderItem
                  key={i}
                  name={order.name}
                  price={order.price}
                  color={order.color}
                  image_url={order.image_url}
                  quantity={String(order.quantity)}
                  product_id={order.product_id}
                  created_at={order.created_at}
                />
              ))}
              <div className="flex flex-col gap-y-5 p-4">
                <div className="flex flex-row justify-between">
                  <p className="font-lexend">Subtotal</p>
                  <p className="font-lexend">${subtotal}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-lexend">Shipping</p>
                  <p className="font-lexend">$5.00</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-lexend">Taxes</p>
                  <p className="font-lexend">$2.00</p>
                </div>
              </div>
              <div className="flex flex-row justify-between p-4 border-y">
                <p className="font-lexend">Total</p>
                <p className="font-lexend">${total}</p>
              </div>
              <div className="flex justify-center p-6">
                <button
                  type="submit"
                  className="w-full font-lexend bg-pink-500 hover:bg-pink-600 rounded-md p-3 text-white"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-10 lg:gap-x-20 gap-y-5">
              <ShoppingCart size={100} className="text-gray-500" />
              <h1 className="font-lexend text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Your cart is currently empty
              </h1>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

export default Cart;
