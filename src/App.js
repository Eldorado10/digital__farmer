import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Header } from "./Components/Shared/Header";
import { Home } from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ContractUs from "./Components/contract/ContractUs";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="tiny5-regular">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contract" element={<ContractUs />} />
        {/* <Route path="appointment" element={<Appointment />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
