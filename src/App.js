
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer';
import { Header } from './Components/Shared/Header';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className='tiny5-regular'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/donate" element={<Donation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/payment" element={<Payment/>} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
