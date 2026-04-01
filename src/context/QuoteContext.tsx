import { createContext, useContext, useState } from 'react';

type QuoteContextType = {
  selectedInsurance: string;
  setSelectedInsurance: (type: string) => void;
};

const QuoteContext = createContext<QuoteContextType>({
  selectedInsurance: '',
  setSelectedInsurance: () => {},
});

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedInsurance, setSelectedInsurance] = useState('');

  return (
    <QuoteContext.Provider value={{ selectedInsurance, setSelectedInsurance }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => useContext(QuoteContext);