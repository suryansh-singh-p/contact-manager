import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Mail, Phone, Building2, Briefcase, FileText, Edit, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { BackButton } from './BackButton';

export const ContactDetailsView = ({ contact, onBack, onEdit, onDelete }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onBack}
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-50 overflow-y-auto"
        onClick={onBack}
      >
      <div 
        className="min-h-screen flex items-center justify-center" 
        style={{ padding: '48px 32px' }}
        onClick={onBack}
      >
        <div 
          className="w-full max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between flex-wrap gap-4" style={{ marginBottom: '12px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '8px 12px' }}>
              <BackButton onClick={onBack} />
            </div>
            <div className="flex gap-3">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onEdit(contact)}
                style={{ backgroundColor: '#3b82f6', paddingLeft: '20px', paddingRight: '20px', paddingTop: '12px', paddingBottom: '12px' }}
                className="text-white rounded-3xl font-medium shadow-md
                         flex items-center gap-2 hover:shadow-lg"
              >
                <Edit size={18} />
                <span>Edit</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onDelete(contact)}
                style={{ backgroundColor: '#ef4444', paddingLeft: '20px', paddingRight: '20px', paddingTop: '12px', paddingBottom: '12px' }}
                className="text-white rounded-3xl font-medium shadow-md
                         flex items-center gap-2 hover:shadow-lg"
              >
                <Trash2 size={18} />
                <span>Delete</span>
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white" style={{ padding: '32px' }}>
              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className={`w-24 h-24 rounded-full ${getAvatarColor(
                    contact.name
                  )} flex items-center justify-center text-3xl font-bold`}
                >
                  {contact.avatar || getInitials(contact.name)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-3xl font-bold mb-2">{contact.name}</h1>
                  {contact.role && <p className="text-lg opacity-90">{contact.role}</p>}
                  {contact.company && (
                    <p className="text-sm opacity-75 mt-1">{contact.company}</p>
                  )}
                </motion.div>
              </div>
            </div>

            <div style={{ padding: '32px' }}>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg font-semibold text-gray-800 mb-6"
              >
                Contact Information
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-blue-50">
                    <Mail size={20} className="text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-800 hover:text-blue-500 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-green-50">
                    <Phone size={20} className="text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-gray-800 hover:text-green-500 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </motion.div>

                {contact.company && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-purple-50">
                      <Building2 size={20} className="text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Company</div>
                      <div className="text-gray-800">{contact.company}</div>
                    </div>
                  </motion.div>
                )}

                {contact.role && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-yellow-50">
                      <Briefcase size={20} className="text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Role</div>
                      <div className="text-gray-800">{contact.role}</div>
                    </div>
                  </motion.div>
                )}

                {contact.notes && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 }}
                    className="flex items-start gap-4 pt-4 border-t border-gray-200"
                  >
                    <div className="p-3 rounded-lg bg-gray-50">
                      <FileText size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Notes</div>
                      <div className="text-gray-800 whitespace-pre-wrap">{contact.notes}</div>
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <div className="text-sm text-gray-500">
                  Added on{' '}
                  {new Date(contact.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

ContactDetailsView.propTypes = {
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
  onBack: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

