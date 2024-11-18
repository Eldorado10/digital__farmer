
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer';
import { Header } from './Components/Shared/Header';
import { Home } from './Components/Home/Home';
import Login from './Components/Login/Login';
import ContractUs from './Components/contract/ContractUs';

function App() {
  return (
    <div className='tiny5-regular'>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contract" element={<ContractUs />} />
        {/* <Route path="appointment" element={<Appointment />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
