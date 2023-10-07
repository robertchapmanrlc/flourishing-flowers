import OrderItem from "../components/order-item";

const orders = [
  {
    image_url: "/src/assets/products/red-rose-bouquet.webp",
    name: "Red Rose Bouquet",
    color: "Red",
    quantity: "2",
    price: "2",
  },
  {
    image_url: "/src/assets/products/red-rose-bouquet.webp",
    name: "Red Rose Bouquet",
    color: "Red",
    quantity: "2",
    price: "2",
  },
];

function Cart() {
  const subtotal = orders.reduce(
    (accumulator, order) =>
      accumulator + parseFloat(order.price) * Number(order.quantity),
    0
  );

  const taxes = 2;
  const shipping = 5;
  const total = subtotal + taxes + shipping;


  return (
    <div className="w-full lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col lg:flex-row lg:gap-x-5">
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
              name="email"
              id="email"
              className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
            />
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
                  name="first name"
                  id="first name"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
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
                  name="last name"
                  id="last name"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last name"
                className="block text-sm font-lexend text-gray-900 pb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="last name"
                id="last name"
                className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="last name"
                className="block text-sm font-lexend text-gray-900 pb-2"
              >
                Apartment, suite, etc.
              </label>
              <input
                type="text"
                name="last name"
                id="last name"
                className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
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
                  name="city"
                  id="city"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
              </div>
              <div className="w-full rounded-md shadow-sm">
                <label
                  htmlFor="last name"
                  className="block text-sm font-lexend text-gray-900 pb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="last name"
                  id="last name"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
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
                  name="state/province"
                  id="state/province"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
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
                  name="postal code"
                  id="postal code"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
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
                name="phone"
                id="phone"
                className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
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
                  name="card name"
                  id="card name"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
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
                  name="card number"
                  id="card number"
                  className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                />
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
                    name="expiration date"
                    id="expiration date"
                    className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                  />
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
                    name="cvc"
                    id="cvc"
                    className="w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md">
        <h1 className="font-lexend text-2xl">Order summary</h1>
        <div className="w-full mt-5 flex flex-col bg-white border rounded-md">
          {orders.map((order) => (
            <OrderItem
              name={order.name}
              price={order.price}
              color={order.color}
              image_url={order.image_url}
              quantity={order.quantity}
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
            <button className="w-full bg-pink-500 rounded-md p-3 text-white">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
