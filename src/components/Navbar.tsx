
import { Search, ShoppingCart, Menu } from "lucide-react";

const categories = ["Just Because", "Birthday", "Anniversary", "Wedding"];

function Navbar() {
  return (
    <nav className="lg:px-32 md:px-16 px-4 pt-4 flex flex-row justify-between">
      <h2 className="font-lexend text-2xl">Flourishing Flowers</h2>
      <ul className="hidden lg:flex flex-row gap-x-5">
        {categories.map((category) => (
          <li className="font-lexend">{category}</li>
        ))}
      </ul>
      <div className="flex flex-row md:gap-x-5 gap-x-2">
        <Search size={30}/>
        <ShoppingCart size={30} />
        <Menu size={30} className="lg:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
