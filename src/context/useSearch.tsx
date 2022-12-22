import React, { useContext, useState, createContext } from "react";

export interface SearchInterface {
  searchText: string | undefined;
  setSearchText: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleSearch: (text: string | undefined) => void;
}

const defaultValue = {};

const SearchContext = createContext<SearchInterface>(
  defaultValue as SearchInterface
);

interface SearchContextProviderProps {
  children: React.ReactNode;
}

const SearchContextProvider = (props: SearchContextProviderProps) => {
  const search = useSearch();

  return (
    <SearchContext.Provider value={search}>
      {props.children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => {
  return useContext(SearchContext);
};

const useSearch = () => {
  const [searchText, setSearchText] = useState<string | undefined>();

  const handleSearch = (text: string | undefined) => {
    setSearchText(text);
  };

  return {
    searchText,
    setSearchText,
    handleSearch,
  };
};

export { SearchContextProvider, useSearch, useSearchContext };
