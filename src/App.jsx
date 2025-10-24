import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AllContactsView } from './components/AllContactsView';
import { AddContactView } from './components/AddContactView';
import { ContactDetailsView } from './components/ContactDetailsView';
import { Toast } from './components/Toast';
import { ConfirmDialog } from './components/ConfirmDialog';
import { mockContacts } from './data/mockContacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [editContact, setEditContact] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [toast, setToast] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    contact: null,
  });

  useEffect(() => {
    setContacts(mockContacts);
    localStorage.setItem('contact-gpt-contacts', JSON.stringify(mockContacts));
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contact-gpt-contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleAddContact = () => {
    setEditContact(null);
    setShowAddForm(true);
  };

  const handleEditContact = (contact) => {
    setEditContact(contact);
    setSelectedContact(null);
    setShowAddForm(true);
  };

  const handleDeleteContact = (contact) => {
    setConfirmDialog({ isOpen: true, contact });
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
    setEditContact(null);
  };

  const handleCloseContactDetails = () => {
    setSelectedContact(null);
  };

  const confirmDelete = () => {
    if (confirmDialog.contact) {
      setContacts((prev) => prev.filter((c) => c.id !== confirmDialog.contact.id));
      setSelectedContact(null);
      setToast({ message: 'Contact deleted successfully', type: 'success' });
    }
    setConfirmDialog({ isOpen: false, contact: null });
  };

  const handleSaveContact = (contactData) => {
    if (editContact) {
      setContacts((prev) =>
        prev.map((c) =>
          c.id === editContact.id ? { ...editContact, ...contactData } : c
        )
      );
      setToast({ message: 'Contact updated successfully', type: 'success' });
    } else {
      const newContact = {
        ...contactData,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
      setContacts((prev) => [newContact, ...prev]);
      setToast({ message: 'Contact added successfully', type: 'success' });
    }
    setShowAddForm(false);
    setEditContact(null);
  };

  return (
    <div className="relative min-h-screen">
      <AllContactsView
        contacts={contacts}
        onSelectContact={handleSelectContact}
        onAddContact={handleAddContact}
      />

      <AnimatePresence>
        {showAddForm && (
          <AddContactView
            onBack={handleCloseAddForm}
            onSave={handleSaveContact}
            editContact={editContact}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedContact && (
          <ContactDetailsView
            contact={selectedContact}
            onBack={handleCloseContactDetails}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title="Delete Contact"
        message={`Are you sure you want to delete ${confirmDialog.contact?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDialog({ isOpen: false, contact: null })}
      />
    </div>
  );
}

export default App;
