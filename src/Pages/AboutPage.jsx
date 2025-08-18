import player2 from "../assets/turf.webp";

const AboutPage = () => {
  return (
    <section
      id="about"
      className=" flex items-center justify-center px-6 py-10 bg-[#222831]"
    >
      <div className="max-w-7xl my-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-5 mb-4">
            About Us
          </h2>
          <p className="italic text-[#14FFEC] mb-4 text-lg sm:text-xl">
            One Turf. Endless Matches.
          </p>
          <p className="text-gray-300 text-base text-justify sm:text-lg leading-relaxed mb-4">
            Garuda Turf is your premier sports destination, offering top-class
            facilities for football, cricket, and other outdoor games. Our
            turf is designed to meet international standards, ensuring players
            enjoy the best playing experience in a safe, vibrant, and
            competitive environment.
          </p>
          <p className="text-gray-300 text-base sm:text-lg text-justify leading-relaxed mb-4">
            Whether you are a professional athlete or a group of friends
            looking for some fun, Garuda Turf provides flexible booking slots,
            night-time lighting, and premium quality turf for an unbeatable
            sporting experience.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full flex">
          {/* Glow Background */}
          <div className="absolute -z-10 w-full h-full bg-[#14FFEC33]  blur-3xl rounded-lg"></div>
          <img
            src={player2}
            alt="Garuda Turf"
            className="w-full h-full object-cover rounded-lg drop-shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;