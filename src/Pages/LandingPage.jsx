import Header from "../Components/Header";
import PrimaryButton from "../Components/PrimaryButton";
import bgImage from '../assets/bg.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>      
      <main className="flex-grow flex items-center relative">
        {/* Background image with brightness reduction */}
        <div 
          className="absolute inset-0 brightness-50" // Reduces brightness to 50%
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition:'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Semi-transparent overlay (optional) */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <section className="relative z-10 py-22 px-8 md:px-30 text-left max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">GARUDA</h1>
          <h2 className="text-3xl md:text-6xl italic font-semibold text-white mb-4">
            Multi sports turf
          </h2>
          <p className="text-xl md:text-4xl italic text-[#14FFEC] mb-8">
            Premium sports turf within campus
          </p>
          <PrimaryButton onClick={() => navigate('/Login')}>Book Now</PrimaryButton>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;