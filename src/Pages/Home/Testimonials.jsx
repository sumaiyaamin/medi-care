import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import Review from "./Review";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/reviews.json") // File should be in `public/reviews.json`
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading reviews:", error));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle heading={"Testimonials"} subHeading={"What Our Participants Say"} />
        <div className="flex flex-wrap -m-4 py-5">
          {reviews.slice(0, 2).map((review) => (
            <Review review={review} key={review._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
