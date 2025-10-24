import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import PropTypes from 'prop-types';

export const ContactCard = ({ contact, onClick, delay = 0 }) => {
  const getAvatarColor = (name) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-pink-500',
      'bg-indigo-500',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-3xl shadow-sm border border-gray-200 
                 cursor-pointer transition-shadow duration-200 hover:border-blue-300"
      style={{ padding: '24px' }}
    >
      <div className="flex items-center" style={{ gap: '16px', marginBottom: '16px' }}>
        <div
          className={`w-12 h-12 rounded-full ${getAvatarColor(
            contact.name
          )} flex items-center justify-center text-white font-semibold text-lg`}
        >
          {contact.avatar || getInitials(contact.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {contact.name}
          </h3>
          {contact.role && (
            <p className="text-sm text-gray-500 truncate">{contact.role}</p>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="flex items-center text-sm text-gray-600" style={{ gap: '8px' }}>
          <Mail size={16} className="text-gray-400" />
          <span className="truncate">{contact.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600" style={{ gap: '8px' }}>
          <Phone size={16} className="text-gray-400" />
          <span className="truncate">{contact.phone}</span>
        </div>
      </div>
    </motion.div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string,
    company: PropTypes.string,
    notes: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  delay: PropTypes.number,
};

