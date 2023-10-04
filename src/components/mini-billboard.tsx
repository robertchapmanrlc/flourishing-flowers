interface MiniBillboardProps {
  item: {
    image_url: string;
    label: string;
  }
}

function MiniBillboard({ item }: MiniBillboardProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${item.image_url})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          <div className="font-lexend font-bold text-xl sm:text-2xl lg:text-4xl sm:max-w-xl max-w-xs ">
            {item.label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBillboard;
