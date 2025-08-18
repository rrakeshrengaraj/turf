import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import Football from "../assets/football.png";
import Cricket from "../assets/cricket_ball.png";
import logo from "../assets/tlogo.png";
import { FaArrowLeft } from "react-icons/fa";

export default function Registration() {
  const navigate = useNavigate();
  const accentColor = "#14FFEC";

  const dates = [
    { day: "Mon", date: 10 },
    { day: "Tue", date: 11 },
    { day: "Wed", date: 12 },
    { day: "Thu", date: 13 },
    { day: "Fri", date: 14 },
    { day: "Sat", date: 15 },
    { day: "Sun", date: 16 },
  ];

  const times = [
    "06:00AM-07:00AM",
    "07:00AM-08:00AM",
    "08:00AM-09:00AM",
    "09:00AM-10:00AM",
    "10:00AM-11:00AM",
    "11:00AM-12:00PM",
  ];

  const sports = [
    { name: "Football", image: Football },
    { name: "Cricket", image: Cricket },
  ];

  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedSport, setSelectedSport] = useState("Football");
  const [players, setPlayers] = useState(1);

  const minPlayers = 1;
  const maxPlayers = 12;

  const increment = () => players < maxPlayers && setPlayers(players + 1);
  const decrement = () => players > minPlayers && setPlayers(players - 1);

  const toggleTime = (time) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      date: selectedDate,
      times: selectedTimes,
      sport: selectedSport,
      players,
    });
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#222831]">
      <div className="absolute top-2 left-6 lg:left-16 z-20" >
        {/* Mobile view: Back button with icon */}
        <button
          className="text-white text-lg mt-10 font-bold flex items-center gap-2 md:hidden"
          onClick={() => navigate(-1)} // Go back to previous page
        >
          <FaArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Desktop view: Logo */}
        <img
          src={logo}
          alt="Garuda Sports Turf Logo"
          className="h-20 w-auto hidden md:block"
        />
      </div>
      <div className="absolute top-6 right-6 lg:right-16 z-20 hidden md:block">
        <button
          onClick={() => navigate("/")}
          className="flex text-xl items-center bg-[#14FFEC] cursor-pointer text-black text-[1rem] font-bold py-2 px-4 md:px-6 rounded-lg hover:scale-105 transition-all duration-300"
        >
          Home
        </button>
      </div>

      <main className="flex-grow flex items-center  justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg">
          <h1 className="text-center text-3xl md:text-4xl text-[#14FFEC] mb-8 font-bold italic">
            Book Your Game
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8 " >
            {/* Date Selection */}
            <div>
              <h2 className="font-bold mb-4  text-xl text-white">Select Date</h2>
              <div className="grid grid-cols-7  gap-2">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex flex-col items-center  p-2 rounded-lg transition-all ${
                      selectedDate === d.date
                        ? "bg-[#14FFEC] text-gray-900 font-bold shadow-lg"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    <span className="text-sm">{d.day}</span>
                    <span className="font-bold">{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h2 className="font-bold mb-4 text-xl text-white">
                Select Time Slot
              </h2>
              <div className="grid grid-cols-2  sm:grid-cols-3 gap-3">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleTime(t)}
                    className={`py-3 px-4 rounded-lg  transition-all ${
                      selectedTimes.includes(t)
                        ? "bg-[#14FFEC] text-gray-900  font-bold"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Sports Selection */}
            <div>
              <h2 className="font-bold mb-4 text-xl text-white">
                Select Sport
              </h2>
              <div className="flex gap-4 flex-wrap">
                {sports.map((sport) => (
                  <button
                    type="button"
                    key={sport.name}
                    onClick={() => setSelectedSport(sport.name)}
                    className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border transition-all min-w-[120px] ${
                      selectedSport === sport.name
                        ? "border-[#14FFEC] bg-[#14FFEC]/20"
                        : "border-gray-700 hover:border-[#14FFEC]"
                    }`}
                  >
                    <img
                      className="w-8 h-8 object-contain"
                      src={sport.image}
                      alt={sport.name}
                    />
                    <span className="text-white">{sport.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Players Selection */}
            <div>
              <h2 className="font-bold mb-4 text-xl text-white">
                Number of Players
              </h2>
              <div className="flex items-center border border-gray-700 rounded-lg w-fit overflow-hidden bg-gray-800">
                <button
                  type="button"
                  className="px-5 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white text-xl"
                  onClick={decrement}
                  disabled={players <= minPlayers}
                >
                  -
                </button>
                <span className="px-6 py-2 font-bold text-white text-xl">
                  {players}
                </span>
                <button
                  type="button"
                  className="px-5 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white text-xl"
                  onClick={increment}
                  disabled={players >= maxPlayers}
                >
                  +
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <PrimaryButton
                type="submit"
                className="w-full py-4 text-lg font-bold hover:scale-105 transition-transform"
              >
                Confirm Booking
              </PrimaryButton>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
