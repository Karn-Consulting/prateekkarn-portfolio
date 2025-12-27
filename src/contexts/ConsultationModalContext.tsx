/**
 * ConsultationModalContext
 * 
 * Global context to manage the consultation modal state
 * Allows any component to open the modal without prop drilling
 */

import { createContext, useContext, useState, ReactNode } from 'react';
import ConsultationModal from '@/components/ConsultationModal';

interface ConsultationModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ConsultationModalContext = createContext<ConsultationModalContextType | undefined>(undefined);

export const useConsultationModal = () => {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error('useConsultationModal must be used within a ConsultationModalProvider');
  }
  return context;
};

interface ConsultationModalProviderProps {
  children: ReactNode;
}

export const ConsultationModalProvider = ({ children }: ConsultationModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConsultationModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </ConsultationModalContext.Provider>
  );
};
