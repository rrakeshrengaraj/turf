import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccessModal = ({ 
  isVisible, 
  onClose, 
  title = "Payment Successful! 🎉",
  message = "Your payment has been processed successfully.",
  buttonText = "Ok"
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
            className="bg-[#393E46] border border-[#14FFEC] rounded-2xl shadow-xl p-6 max-w-sm w-full text-center"
          >
            <FaCheckCircle className="text-[#14FFEC] w-12 h-12 mx-auto mb-4" />
            <h2 className="text-[#14FFEC] text-xl font-bold">{title}</h2>
            <p className="text-gray-300 mt-2">{message}</p>
            <button
              onClick={onClose}
              className="mt-6 bg-[#14FFEC] hover:bg-teal-400 cursor-pointer text-[#393E46] font-semibold py-2 px-6 rounded-full shadow-md transition-colors"
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentSuccessModal;
