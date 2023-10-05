
function MainBillboard() {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-[url('src/assets/banners/banner-1.jpg')]">
        <div className="h-full w-full flex flex-col md:justify-center justify-start items-center text-center">
          <div className="font-lexend font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs lg:mt-0 mt-10 ">
            Beautiful Birthday Flowers
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBillboard;
