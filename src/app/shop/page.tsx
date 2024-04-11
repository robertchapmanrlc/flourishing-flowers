import Filter from "@/components/filter";
import MobileFilterMenu from "@/components/mobile-filter-menu";
import ProductCard from "@/components/product-card";
import SortMenu from "@/components/sort-menu";
import { sortMax, sortMin, sortProducts } from "@/utilities/utils";
import { getAllProducts } from "actions/get-products";

export default async function Shop({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let products = await getAllProducts();

  const selectedSorting = searchParams?.sort as string;

  if (selectedSorting === "price-low-to-high") {
    products.sort(sortMin);
  } else if (selectedSorting === "price-high-to-low") {
    products.sort(sortMax);
  } else if (selectedSorting === "newest") {
    products.sort(sortProducts);
  }

  const selectedColors = (searchParams?.color || "") as string;
  const selectedOccasion = (searchParams?.occasion || "") as string;

  const colors = selectedColors.split(",");
  const occasions = selectedOccasion.split(",");

  if (selectedOccasion !== "")
    products = products.filter((product) =>
      occasions.includes(product.occasion.name.toLowerCase())
    );
  if (selectedColors !== "")
    products = products.filter((product) =>
      product.colors.some((color) => colors.includes(color.name))
    );

  const filters = [
    {
      name: "Color",
      options: [
        { label: "Red", urlLabel: 'red' },
        { label: "Blue", urlLabel: 'blue' },
        { label: "Yellow", urlLabel: 'yellow' },
        { label: "Green", urlLabel: 'green' },
        { label: "White", urlLabel: 'white' },
        { label: "Pink", urlLabel: 'pink' },
      ],
    },
    {
      name: "Occasion",
      options: [
        { label: "Birthdays", urlLabel: 'birthdays' },
        { label: "Weddings", urlLabel: 'weddings' },
        { label: "Get Well", urlLabel: 'get well' },
        { label: "Housewarming", urlLabel: 'housewarming' },
      ],
    },
  ];

  return (
    <main className="w-full py-6 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 flex flex-col gap-y-8 justify-start items-center">
      <div className="w-full pb-6 flex flex-row justify-between items-center border-b-2 border-gray-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-pokova tracking-tight text-gray-900">
          Search For Flowers
        </h1>
        <div className="w-24 flex flex-row justify-between items-center">
          <SortMenu />
          <MobileFilterMenu filters={filters} />
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-12">
        <div className="hidden lg:flex flex-col w-72 text-left">
          {filters.map((filter, i) => (
            <Filter key={i} filter={filter} />
          ))}
        </div>
        {products.length === 0 ? (
          <>
            <div className="w-full flex justify-center items-center">
              <h4 className="font-pokova text-xl text-gray-600">
                No flowers found
              </h4>
            </div>
          </>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:gap-y-10 md:gap-x-10 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  card={{
                    name: product.name,
                    link: product.urlName,
                    price: product.price,
                    image_url: product.images[0].imageUrl,
                    colors: product.colors,
                  }}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
