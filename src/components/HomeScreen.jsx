import { motion } from 'framer-motion';
import { Users, Search, UserPlus } from 'lucide-react';
import PropTypes from 'prop-types';

const HomeButton = ({ icon: Icon, title, subtitle, onClick, delay }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative w-64 h-28 bg-white border-2 border-gray-200 rounded-2xl 
                 shadow-sm hover:shadow-md transition-shadow duration-300
                 flex flex-col items-center justify-center gap-2 p-6
                 hover:border-blue-300 group"
    >
      <Icon 
        size={32} 
        className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300" 
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </motion.button>
  );
};

HomeButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  delay: PropTypes.number,
};

export const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Contact-GPT</h1>
          <p className="text-xl text-gray-600">Your minimal contact manager</p>
        </motion.div>

        <div className="flex flex-col gap-6 items-center">
          <HomeButton
            icon={Users}
            title="All Contacts"
            subtitle="View and manage contacts"
            onClick={() => onNavigate('contacts')}
            delay={0.1}
          />
          <HomeButton
            icon={Search}
            title="Search"
            subtitle="Find a contact"
            onClick={() => onNavigate('search')}
            delay={0.2}
          />
          <HomeButton
            icon={UserPlus}
            title="Add Contact"
            subtitle="Create new contact"
            onClick={() => onNavigate('add')}
            delay={0.3}
          />
        </div>
      </div>
    </div>
  );
};

HomeScreen.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

