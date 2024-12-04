'use client';

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { NavDataForm } from '../components/molecules/Form/data';
import { Link } from '../types/data';

type NavLinksContextType = {
  links: Link[];
  setLinks: Dispatch<SetStateAction<Link[]>>;
  addNewLink: (data: NavDataForm) => void;
  editLink: (data: NavDataForm, id: Link['id']) => void;
  deleteLink: (id: Link['id']) => void;
};

type NavLinksProviderProps = {
  children: ReactNode;
};

const NavLinksContext = createContext<NavLinksContextType | undefined>(undefined);

export const NavLinksProvider: FC<NavLinksProviderProps> = ({ children }) => {
  const [links, setLinks] = useState<Link[]>([]);

  const addNewLink = (data: NavDataForm) => {
    setLinks((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: data.title,
        url: data.url || '',
      },
    ]);
  };

  const editLink = (data: NavDataForm, id: Link['id']) => {
    setLinks((prev) =>
      prev.map((prevLink) =>
        prevLink.id === id
          ? {
              ...prevLink,
              title: data.title,
              url: data.url || '',
            }
          : prevLink,
      ),
    );
  };

  const deleteLink = (id: Link['id']) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <NavLinksContext.Provider value={{ links, setLinks, addNewLink, editLink, deleteLink }}>
      {children}
    </NavLinksContext.Provider>
  );
};

export const useNavLinksContext = () => {
  const context = useContext(NavLinksContext);
  if (!context) {
    throw new Error('useLinks must be used within a LinkProvider');
  }
  return context;
};