import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes, FaCalendarCheck, FaMoneyBillWave } from 'react-icons/fa';

const BookingSuccess = ({ 
  isVisible, 
  onClose, 
  title = "Booking Confirmed! 🎉",
  message = "Your turf session has been successfully booked. See you on the field!",
  duration = 6000,
  bookingDetails = null
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-10 right-130 z-50 max-w-md"
        >
          <div className="bg-[#393E46] border border-[#14FFEC] rounded-xl p-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <div className="text-[#14FFEC] flex-shrink-0 mt-0.5">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#14FFEC] font-bold text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {message}
                </p>
                
                <p className="text-xs text-gray-400 mt-3">
                  You can view your bookings in the 'Your Activity' section.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors flex-shrink-0"
                aria-label="Close notification"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingSuccess;