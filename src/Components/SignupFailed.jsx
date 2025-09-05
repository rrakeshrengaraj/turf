import { motion, AnimatePresence } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";

const SignupFailedModal = ({ 
  isVisible, 
  onClose, 
  title = "Signup Failed ",
  message = "There was an issue creating your account. Please try again.",
  buttonText = "Retry"
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-[#393E46] border border-red-500 rounded-2xl shadow-xl p-6 max-w-sm w-full text-center"
          >
            <FaTimesCircle className="text-red-500 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-red-400 text-xl font-bold">{title}</h2>
            <p className="text-gray-300 mt-2">{message}</p>
            <button
              onClick={onClose}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white cursor-pointer font-semibold py-2 px-6 rounded-full shadow-md transition-colors"
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupFailedModal;
