import { useState, createContext, useMemo } from "react";
import propTypes from "prop-types";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  const value = useMemo(
    () => ({ token, setToken, id, setId }),
    [token, setToken, id, setId]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// create a hook to use the context

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};
