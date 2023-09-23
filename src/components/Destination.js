import Mountain1 from "../assets/13.jpg";
import Mountain2 from "../assets/14.jpg";
import Mountain3 from "../assets/15.jpg";
import Mountain4 from "../assets/19.jpg";
import Mountain5 from "../assets/17.jpg";
import Mountain6 from "../assets/18.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Trips give you the best opportunity to discover a lot within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Goh Kincha, Manali"
        text="Discover the breathtaking beauty of Manali from a new perspective at Goh Kincha Peak. Nestled amidst the Himalayan landscape, this enchanting destination offers travelers an unforgettable adventure. With its awe-inspiring vistas and serene ambiance, Goh Kincha Peak is a must-visit for nature enthusiasts and thrill-seekers alike. Whether you're an avid trekker or simply looking to escape the hustle and bustle of city life, this peak promises a rejuvenating experience like no other. Explore the wonders of Manali with us and make memories that will last a lifetime."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Munnar Range, Kerala"
        text="Indulge in the enchanting allure of Munnar, Kerala's emerald paradise, where verdant tea gardens carpet the rolling hills. Our travel package invites you to immerse yourself in this idyllic retreat, where misty mornings and cool, crisp air create a haven for relaxation. Hike through the vibrant flora of Eravikulam National Park or unwind amidst the serenity of the Attukal Waterfalls. Munnar promises an escape into nature's embrace, with its picturesque landscapes and tranquil ambiance. Join us in discovering the magic of Munnar, where every moment becomes a cherished memory."
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className="first-des-reverse-again"
        heading="Baga Beach, Goa"
        text="Experience the ultimate coastal paradise at Baga Beach in Goa, where sun-kissed shores meet the vibrant spirit of India. Nestled along the Arabian Sea, this stunning destination is a must-visit for travelers seeking relaxation and adventure. With its pristine golden sands and an array of water sports, Baga Beach promises an unforgettable vacation. Savor delectable seafood at beachside shacks, dance to the rhythm of live music, and immerse yourself in the vibrant nightlife. Explore Goa's charm with us, and let Baga Beach be your gateway to an exotic Indian adventure!"
        img1={Mountain5}
        img2={Mountain6}
      />
    </div>
  );
};

export default Destination;
