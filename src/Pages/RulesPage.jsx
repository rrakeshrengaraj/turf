const RulesPage = () => {
  const rules = [
    {
      title: "Operating Hours",
      items: [
        "Monday to Friday: 6:00 AM - 10:00 PM",
        "Saturday to Sunday: 6:00 AM - 10:00 PM",
        "Holiday hours may vary",
      ],
    },
    {
      title: "Booking & Capacity",
      items: [
        "Advance booking required for all sessions",
        "Maximum 12 players per turf section",
        "Minimum 2-hour booking duration",
        "24-hour cancellation policy",
      ],
    },
    {
      title: "Prohibited Items",
      items: [
        "Food and beverages (except water)",
        "Metal cleats or spikes",
        "Chewing gum",
        "Glass containers",
      ],
    },
    {
      title: "Safety Guidelines",
      items: [
        "Proper athletic footwear required",
        "No rough play or dangerous activities",
        "First aid kit available at reception",
        "Report any injuries to staff immediately",
      ],
    },
  ];

  return (
    <section
      id="rules"
      className="min-h-screen py-5 bg-[#222831] flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-16">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white pb-">
            Rules
          </h1>
          <p className="italic text-[#14FFEC] text-lg">
            Play fair, stay safe, enjoy the game
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="rounded-xl p-6 border border-gray-700 bg-[#393E46] h-full
                transition-all cursor-pointer duration-300 hover:border-[#14FFEC]"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-[#14FFEC]">
                {rule.title}
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-200">
                {rule.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Background Glow */}
        <div className="absolute -z-10 w-[80%] h-[60%] bg-[#14FFEC33] blur-3xl rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15" />
      </div>
    </section>
  );
};

export default RulesPage;
