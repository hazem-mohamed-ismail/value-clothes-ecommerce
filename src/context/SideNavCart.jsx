import { createContext, useState, useContext } from "react";

export const SideNavCartContext = createContext();

export const SideNavCartProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SideNavCartContext.Provider value={{ show, setShow }}>
        {children}
      </SideNavCartContext.Provider>
    </>
  );
};

export const useShowSideNavCart = () => {
  return useContext(SideNavCartContext);
};
