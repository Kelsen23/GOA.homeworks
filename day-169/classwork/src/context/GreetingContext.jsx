import { createContext } from 'react';

const GreetContext = createContext();

const GreetingProvider = ({ children }) => {
  return (
      <GreetContext.Provider value="Salut!">
        {children}
      </GreetContext.Provider>
  );
};

export { GreetContext, GreetingProvider }; 