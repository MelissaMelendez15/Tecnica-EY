import './App.css';

import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './layout/navbar/Navbar'
import IndexPage from './pages/home/index-page';
import PictureList from './pages/pictureList/PictureList';
import Footer from './layout/footer/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
           <Route path='/' element={<IndexPage />}/>
           <Route path='/imagen' element={<PictureList />} />
        </Routes>
      </div>
      <Footer />
    </>
    
  );
}

export default App;
