import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterPage from './assets/layouts/footer';
import Header from './assets/layouts/header';
import AddPage from './assets/pages/add-page';
import Details from './assets/pages/details';
import HomePage from './assets/pages/home';
import NotFoundPage from './assets/pages/not-found';
import WishList from './assets/pages/wishList';

function App() {
  const [wishList, setWishList] = useState([])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage wishList={wishList} setWishList={setWishList}/>}/>
        <Route path='/add-page' element={<AddPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/wish-list' element={<WishList wishList={wishList} setWishList={setWishList}/>}/>
        <Route path='/home/:_id' element={<Details />}/>
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
