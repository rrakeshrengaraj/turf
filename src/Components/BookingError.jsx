import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const BookingError = ({ 
  isVisible, 
  onClose, 
  title = "Booking Failed ",
  message = "There was an issue processing your booking. Please try again.",
  duration = 6000,
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
          <div className="bg-[#393E46] border border-red-300 rounded-xl p-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <div className="text-red-400 flex-shrink-0 mt-0.5">
                <FaExclamationTriangle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-red-400 font-bold text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {message}
                </p>
                
                <p className="text-xs text-gray-400 mt-3">
                  Need help? Contact <span className="text-red-300">support@turfxl.com</span>
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

export default BookingError;
