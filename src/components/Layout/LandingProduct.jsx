import HeadSection from "../Fragments/HeadSection";
import ListProduct from "../Fragments/ListProduct";

function LandingProduct() {
  return (
    <section className="overflow-hidden  h-auto">
      <HeadSection disableAnimation={true} />

      {/* Grid Keseluruhan */}
      <div className="grid grid-cols-1 md:grid-cols-5 sm:px-12 px-4 gap-0 sm:gap-2 space-y-4 sm:space-y-0 h-auto z-10 relative">
        {/* Grid Kiri */}
        <div className="col-span-5  rounded-2xl pt-6 sm:pt-0">
          {/* Grid Utama (Kiri) Product */}
          <div className="grid grid-cols-5 overflow-hidden mb-4 sm:mb-2 ">
            <div className="col-span-5 overflow-hidden h-screen ">
              <ListProduct />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingProduct;
