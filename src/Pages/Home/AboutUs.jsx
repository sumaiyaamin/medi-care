const AboutUs = () => {
  return (
      <section 
          className="py-16 px-4 md:px-20 bg-fixed bg-center bg-cover text-center text-white" 
          style={{ backgroundImage: "url('https://i.ibb.co/8gs5m7X/Medical-Volunteer-Abroad-Header.jpg')" }}
      >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                  We connect adventurers with the best camps, creating unforgettable experiences. Our mission is to make outdoor adventures accessible to everyone!
              </p>
          </div>
      </section>
  );
};
export default AboutUs;

