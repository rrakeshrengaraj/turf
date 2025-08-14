const PrimaryButton = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-[#14FFEC] cursor-pointer text-black font-bold py-3 px-10 rounded-3xl text-lg transition-colors duration-300 transform hover:scale-105 "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;