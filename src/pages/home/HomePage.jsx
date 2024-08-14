import LoadingSection from "../../components/Layout/LoadingSection";
import LandingPage from "../../components/Layout/LandingPage";
import "../index.css";

function HomePage() {
  return (
    <>
      <section className="bg-[#E9E6E1]  relative sm:flex sm:justify-center sm:items-center w-full  ">
        <div className=" max-w-screen-2xl">
          <LoadingSection />
          <LandingPage />
        </div>
      </section>
    </>
  );
}

export default HomePage;
