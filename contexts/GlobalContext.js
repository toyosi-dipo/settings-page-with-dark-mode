import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const initialState = {
  darkMode: false,
  isProfileEdit: false,
  activeNavTab: 6,
  activeHeadingTab: 1,
};

function GlobalProvider({ children }) {
  const [state, setState] = useState(initialState);

  function setLightMode() {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    setState({ ...state, darkMode: false });
  }

  function setDarkMode() {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    setState({ ...state, darkMode: true });
  }

  function toggleEditProfile() {
    setState({ ...state, isProfileEdit: !state.isProfileEdit });
  }

  function handleNavTab(index) {
    setState({ ...state, activeNavTab: index });
  }

  function handleHeadingTab(index) {
    setState({ ...state, activeHeadingTab: index });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setDarkMode,
        setLightMode,
        toggleEditProfile,
        handleNavTab,
        handleHeadingTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export default GlobalProvider;
