import React, { useState } from "react";
import { Price, Thumbnail } from "../interfaces";

type Modal = {
  description: string;
  title: string;
  prices: Price;
  thumbnail: Thumbnail;
};

export interface UIContextProps {
  modal: boolean;
  setModal: (p: boolean) => void;
  modalData: Modal;
  setModalData: (p: Modal) => void;
}

export const UIContext = React.createContext<UIContextProps>({
  modal: false,
  setModal: (p: boolean) => p,
  modalData: {
    description: null,
    title: null,
    prices: null,
    thumbnail: null,
  },
  setModalData: (p: Modal) => p,
});

export const UiProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({} as Modal);

  return (
    <UIContext.Provider
      value={{
        modal,
        setModal,
        modalData,
        setModalData
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

// React hook for interfacing with context
export const useUiContext = () => {
  const context = React.useContext(UIContext);
  return context;
};
