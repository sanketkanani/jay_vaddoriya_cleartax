import { RouterProvider } from "react-router-dom";
import { DashboardRouter } from "./routes";
import { createContext, useContext, useState } from "react";
import "./assets/css/style.css";

export const HeaderTextContext = createContext();

function App() {
  const [headerText, setHeaderText] = useState("");
  return (
    <HeaderTextContext.Provider value={{ headerText, setHeaderText }}>
      <RouterProvider router={DashboardRouter} />
    </HeaderTextContext.Provider>
  );
}

export const useTitle = () => {
  return useContext(HeaderTextContext);
};

export default App;
