// import { Trash } from "lucide-react";
// import { useContext } from "react";

// import { ShopContext } from "../contexts/shop-context";
import { Link } from "react-router-dom";

interface OrderItemProps {
  name: string;
  image_url: string;
  price: string;
  quantity: string;
  color: string;
  product_id: number;
  created_at: string;
}

function OrderItem({ name, image_url, price, quantity, color, product_id }: OrderItemProps) {

  // const { removeFromCart, changeQuantity } = useContext(ShopContext);

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   // changeQuantity(product_id, created_at, Number(e.target.value));
  // };

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
            <Link to={`/product/${product_id}`}>
              <p className="font-lexend text-gray-900/80 hover:underline cursor-pointer">{name}</p>
            </Link>
            <p className="font-lexend text-gray-900/50">{color}</p>
          </div>
          <p className="font-lexend">${price}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        {/* <button onClick={() => removeFromCart(product_id, created_at)}>
          <Trash className="text-gray-500 hover:text-gray-800" />
        </button> */}
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
