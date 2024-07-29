import HeadSection from "../Fragments/HeadSection";
import ProductSection from "../Fragments/ProductSection";

function LandingPage() {
  return (
    <header>
      <HeadSection />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 relative">
            <ProductSection />
          </div>
          <div className="col-span-2 bg-green-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Kolom 40%</h2>
            <p>Ini adalah konten untuk kolom yang memiliki lebar 40%.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingPage;
