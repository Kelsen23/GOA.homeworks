import React, { useContext } from 'react';
import { GreetContext, GreetingProvider } from './context/GreetingContext'; 

const GreetingDisplay = () => {
  const greeting = useContext(GreetContext);
  return <h1>{greeting}</h1>; 
};

const App = () => {
  return (
    <GreetingProvider> 
      <GreetContext.Provider value="Hallo!">
        <GreetingDisplay /> 
      </GreetContext.Provider>
    </GreetingProvider>
  );
};

export default App;
