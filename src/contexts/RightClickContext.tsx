import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface RightClickContextType {
  isRightClickDisabled: boolean;
  toggleRightClick: () => void;
  setRightClickDisabled: (disabled: boolean) => void;
}

const RightClickContext = createContext<RightClickContextType | undefined>(undefined);

export const useRightClick = () => {
  const context = useContext(RightClickContext);
  if (context === undefined) {
    throw new Error('useRightClick must be used within a RightClickProvider');
  }
  return context;
};

interface RightClickProviderProps {
  children: ReactNode;
}

export const RightClickProvider: React.FC<RightClickProviderProps> = ({ children }) => {
  const [isRightClickDisabled, setIsRightClickDisabled] = useState(true);

  const toggleRightClick = () => {
    setIsRightClickDisabled(prev => !prev);
  };

  const setRightClickDisabled = (disabled: boolean) => {
    setIsRightClickDisabled(disabled);
  };

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (isRightClickDisabled) {
        e.preventDefault();
        return false;
      }
    };

    if (isRightClickDisabled) {
      document.addEventListener('contextmenu', handleContextMenu);
    } else {
      document.removeEventListener('contextmenu', handleContextMenu);
    }

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isRightClickDisabled]);

  const value = {
    isRightClickDisabled,
    toggleRightClick,
    setRightClickDisabled,
  };

  return (
    <RightClickContext.Provider value={value}>
      {children}
    </RightClickContext.Provider>
  );
};