import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// This initial state only includes properties relevant to this application.
const initialState = {
  userProfile: false,
};

// This context provider manages global state for the application,
// such as theme, color, and sidebar status, to avoid prop drilling.
export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7'); // Sets the initial theme color
  const [currentMode, setCurrentMode] = useState('Light');
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  // Bundling up the state and setters to pass to consuming components.
  const value = { 
    currentColor, currentMode, activeMenu, screenSize, setScreenSize, 
    handleClick, isClicked, initialState, setIsClicked, setActiveMenu, 
    setCurrentColor, setCurrentMode, setMode, setColor 
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to easily consume the context in other components.
export const useStateContext = () => useContext(StateContext);