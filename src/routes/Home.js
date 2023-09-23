import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Dream Our Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
        url="/service"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
