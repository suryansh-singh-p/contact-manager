import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const BackButton = ({ onClick, label = 'Back' }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-800
                 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-2xl px-3 py-2"
      aria-label={label}
    >
      <ArrowLeft size={24} />
      <span className="font-semibold">{label}</span>
    </motion.button>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

