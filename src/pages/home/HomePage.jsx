// import LoadingSection from "../../components/Layout/LoadingSection";
import LandingPage from "../../components/Layout/LandingPage";
import "../index.css";

function HomePage() {
  return (
    <>
      <section className="px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        {/* <LoadingSection /> */}
        <LandingPage />
      </section>
    </>
  );
}

export default HomePage;
