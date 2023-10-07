import { Link } from "react-router-dom";

interface MiniBillboardProps {
  item: {
    image_url: string;
    label: string;
    route: string;
  }
}

function MiniBillboard({ item }: MiniBillboardProps) {
  return (
    <Link to={item.route} className="w-full" >
      <div
        className="hidden lg:block w-full rounded-xl overflow-hidden cursor-pointer hover:opacity-70 hover:scale-105 transition"
      >
        <div
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          style={{ backgroundImage: `url(${item.image_url})` }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center">
            <div className="font-lexend font-bold md:text-2xl lg:text-4xl sm:max-w-xl max-w-xs ">
              {item.label}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MiniBillboard;
