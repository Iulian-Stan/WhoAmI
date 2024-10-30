import { createContext, useContext } from 'react';

export const EventContext = createContext(null);

export const useEventContext = () => {
  return useContext(EventContext);
};
