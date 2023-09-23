import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/20.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/21.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                   image={Trip1}
                   heading="Trip in Sri Lanka"
                   text="Experience the beauty of Sri Lanka on an unforgettable trip with our expertly curated tours. Explore lush tea plantations, pristine beaches, and ancient temples while indulging in authentic cuisine. Book your adventure today and immerse yourself in this tropical paradise."
                />
                <TripData
                   image={Trip2}
                   heading="Trip in Maldives"
                   text="Escape to paradise with a trip to the Maldives! Discover pristine beaches, crystal-clear waters, and luxurious overwater bungalows. Let us plan your dream getaway, where adventure and relaxation await. Book now for the ultimate travel experience!"
                />
                <TripData
                   image={Trip3}
                   heading="Trip in Ladakh"
                   text="Experience the breathtaking beauty of Ladakh on an unforgettable trip! Explore the serene landscapes, pristine lakes, and ancient monasteries with our expertly crafted tours. Book now for an adventure of a lifetime!"
                />
            </div>
        </div>
    );
};

export default Trip;