import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import DataProvider from "./context/DataProvider";

import "./App.css";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <div className="mt-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/user" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
