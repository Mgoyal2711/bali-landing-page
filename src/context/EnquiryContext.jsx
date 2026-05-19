import { createContext, useContext, useState, useCallback } from 'react';

const EnquiryContext = createContext(null);

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openEnquiry = useCallback(() => setOpen(true), []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  return (
    <EnquiryContext.Provider value={{ open, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider');
  return ctx;
}
