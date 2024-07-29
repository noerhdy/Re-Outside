import HeadSection from "../Fragments/HeadSection";
import ProductSection from "../Fragments/ProductSection";

function LandingPage() {
  return (
    <header>
      <HeadSection />
      <div className="max-w-screen-xl mx-4 py-2 ">
        <div className="grid grid-cols-5 gap-2">
          {/* Kolom pertama */}
          <div className="col-span-4 grid-rows-3 grid gap-2">
            <div className="row-span-3">
              <ProductSection />
            </div>
            <div className="grid grid-cols-6 grid-rows-1 gap-2">
              <div className="col-span-1 grid grid-rows-2  h-30 gap-2">
                <div className="row-span-1 bg-blue-800 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold">Kolom 30%</h2>
                </div>
                <div className="row-span-1 bg-blue-800 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold">Kolom 30%</h2>
                </div>
              </div>
              <div className="col-span-2 bg-yellow-200 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold">Kolom 20%</h2>
              </div>
              <div className="col-span-3 bg-yellow-200 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold">Kolom 20%</h2>
              </div>
            </div>
          </div>

          {/* Kolom kedua */}
          <div className="col-span-1 grid grid-rows-2 gap-2">
            <div className="row-span-3 bg-green-200 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold">Kolom 40%</h2>
            </div>
            <div className="row-span-1 bg-purple-200 p-4 rounded-lg h-20">
              <h2 className="text-2xl font-semibold">Kolom 40%</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingPage;
