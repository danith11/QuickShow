import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ cildren }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  useContext(AppContext);
};
