import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Container from './layout/Container';
import Home from './pages/Home'
import Vender from './pages/imovel/Vender'



function App() {
  return (
   
      <BrowserRouter >
        <Navbar />

        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vender" element={<Vender />}></Route>
          </Routes>
        </Container>



        <Footer />


      </BrowserRouter>

  );
}

export default App;
