import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactCard } from './ContactCard';

export const AllContactsView = ({ contacts, onSelectContact, onAddContact }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phone.includes(searchQuery) ||
        (contact.company && contact.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (contact.role && contact.role.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
            <div className="w-full" style={{ paddingTop: '48px' }}>
                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl font-bold text-gray-800"
                    >
                        Contact Manager
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-gray-600 mt-3 text-lg"
                    >
                        {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                    style={{ padding: '0 32px', maxWidth: '700px', margin: '0 auto 32px' }}
                >
                    <div className="relative">
                        <Search
                            size={20}
                            className="absolute text-gray-400"
                            style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                        />
                        <input
                            type="text"
                            placeholder="Search by name, email, phone, company, or role..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border-2 border-gray-200 text-gray-800
                                     focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400
                                     transition-all duration-200 bg-white shadow-sm"
                            style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}
                        />
                    </div>
                    {searchQuery && (
                        <p className="text-sm text-gray-500 mt-2">
                            Found {filteredContacts.length} {filteredContacts.length === 1 ? 'contact' : 'contacts'}
                        </p>
                    )}
                </motion.div>

                {filteredContacts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center py-16"
                    >
                        {searchQuery ? (
                            <>
                                <Search size={48} className="text-gray-300" style={{ margin: '0 auto 16px' }} />
                                <p className="text-gray-500 text-lg mb-4">No contacts found</p>
                                <p className="text-gray-400">Try searching with a different keyword</p>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-500 text-lg mb-4">No contacts yet</p>
                                <p className="text-gray-400">Click the button below to add your first contact</p>
                            </>
                        )}
                    </motion.div>
                ) : (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6" style={{ padding: '0 32px' }}>
                        {filteredContacts.map((contact, index) => (
                            <ContactCard
                                key={contact.id}
                                contact={contact}
                                onClick={() => onSelectContact(contact)}
                                delay={0.1 + index * 0.05}
                            />
                        ))}
                    </div>
                )}

                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onAddContact}
                    style={{ backgroundColor: '#3b82f6' }}
                    className="fixed bottom-8 right-8 w-16 h-16 z-40
                     text-white rounded-full shadow-2xl flex items-center justify-center
                     transition-all duration-200 cursor-pointer"
                    aria-label="Add contact"
                >
                    <Plus size={28} strokeWidth={2.5} />
                </motion.button>
            </div>
        </motion.div>
    );
};

AllContactsView.propTypes = {
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
    onSelectContact: PropTypes.func.isRequired,
    onAddContact: PropTypes.func.isRequired,
};

