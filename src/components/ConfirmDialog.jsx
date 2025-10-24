import { AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

export const ConfirmDialog = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ padding: '32px', zIndex: 60 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onCancel}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full"
          >
            <div style={{ padding: '32px' }}>
              <div className="flex items-start" style={{ gap: '16px' }}>
                <div className="p-3 rounded-full bg-red-100">
                  <AlertTriangle size={24} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800" style={{ marginBottom: '12px' }}>{title}</h3>
                  <p className="text-gray-600 text-base">{message}</p>
                </div>
              </div>

              <div className="flex gap-4" style={{ marginTop: '32px' }}>
                <button
                  onClick={onCancel}
                  className="flex-1 rounded-3xl border-2 font-medium shadow-sm
                           hover:bg-gray-50 transition-all duration-200"
                  style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '14px', paddingBottom: '14px', borderColor: '#d1d5db', color: '#374151' }}
                >
                  {cancelText}
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 rounded-3xl font-medium shadow-md
                           hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: '#ef4444', color: 'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '14px', paddingBottom: '14px' }}
                >
                  {confirmText}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ConfirmDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

