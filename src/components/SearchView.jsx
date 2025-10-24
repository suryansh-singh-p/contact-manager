import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BackButton } from './BackButton';
import { ContactCard } from './ContactCard';

export const SearchView = ({ contacts, onBack, onSelectContact }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery) ||
    (contact.company && contact.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <BackButton onClick={onBack} />
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ scaleX: 0.5, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative mb-8"
        >
          <Search
            size={24}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search contacts..."
            autoFocus
            className="w-full pl-14 pr-6 py-5 text-lg rounded-2xl border-2 border-gray-200
                       focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100
                       transition-all duration-200 bg-white shadow-sm"
          />
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {searchQuery === '' ? (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Start typing to search contacts</p>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-2">No contacts found</p>
              <p className="text-gray-400">Try searching with a different keyword</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Found {filteredContacts.length}{' '}
                {filteredContacts.length === 1 ? 'contact' : 'contacts'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredContacts.map((contact, index) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    onClick={() => onSelectContact(contact)}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

SearchView.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      role: PropTypes.string,
      company: PropTypes.string,
      notes: PropTypes.string,
      createdAt: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func.isRequired,
  onSelectContact: PropTypes.func.isRequired,
};

