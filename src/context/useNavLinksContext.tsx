'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { NavDataForm } from '../components/molecules/FormField/data';
import { Link } from '../types/data';

type NavLinksContextType = {
  links: Link[];
  addNewLink: (data: NavDataForm) => void;
  editLink: (data: NavDataForm, id: Link['id']) => void;
  deleteLink: (id: Link['id']) => void;
  setNewLinksOrder: (newOrder: Link[]) => void;
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
        tag: data.url ? 'URL' : 'Collection',
        rune: data.rune,
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
              tag: data.url ? 'URL' : 'Kolekcja',
            }
          : prevLink,
      ),
    );
  };

  const deleteLink = (id: Link['id']) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const setNewLinksOrder = (newOrder: Link[]) => {
    setLinks(newOrder);
  };

  return (
    <NavLinksContext.Provider value={{ links, addNewLink, editLink, deleteLink, setNewLinksOrder }}>
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
