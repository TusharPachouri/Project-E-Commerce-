import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import SignUp from './SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Product component here</h1>} />
          <Route path='/add' element={<h1>add product component here</h1>} />
          <Route path='/update' element={<h1>update component here</h1>} />
          <Route path='/logout' element={<h1>logout component here</h1>} />
          <Route path='/profile' element={<h1>profile component here</h1>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
