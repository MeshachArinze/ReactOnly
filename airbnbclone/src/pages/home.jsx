
import Header from "../components/header";
import HeroSection from "../components/hero_section";
import Location from "../components/location";
import LiveAnywhere from "../components/live_anywhere";
import Experience from "../components/experience";
import MillionHost from "../components/million_host";
import TabsSection from "../components/tabs_section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <div className="customContainer">
          <Location />
          <LiveAnywhere />
        </div>

        <Experience />
        <div className="customContainer">
          <MillionHost />
          <TabsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}