import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import ListEmployeeComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes> {/* Replaced Switch with Routes */}
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> */}
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
