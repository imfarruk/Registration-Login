import { useState, createContext } from "react";
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [accountDetail, setAccountDetail] = useState([]);

  return (
    <DataContext.Provider
      value={{ account, setAccount, accountDetail, setAccountDetail }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
