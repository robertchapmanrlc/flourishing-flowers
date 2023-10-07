import { Trash } from "lucide-react";

interface OrderItemProps {
  name: string;
  image_url: string;
  price: string;
  quantity: string;
  color: string;
}

function OrderItem({ name, image_url, price, quantity, color }: OrderItemProps) {
  return (
    <div className="w-full p-4 flex flex-row justify-between border-b">
      <div className="flex gap-x-3">
        <img
          src={image_url}
          alt="Picture of product"
          className="w-[100px] rounded-md border border-gray-900/10"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-start">
            <p className="font-lexend text-gray-900/80">{name}</p>
            <p className="font-lexend text-gray-900/50">{color}</p>
          </div>
          <p className="font-lexend">${price}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button>
          <Trash className="text-gray-500 hover:text-gray-800" />
        </button>
        <select name="quantity" defaultValue={quantity} id="quantity" className="p-1 border border-gray-900/20 rounded-md">
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
  );
}

export default OrderItem;
