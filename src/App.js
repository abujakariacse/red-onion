import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dinners from './Pages/Foods/Dinners/Dinners';
import Lunchs from './Pages/Foods/Lunchs/Lunchs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Pages/Shared/Header/Header';
import Breakfasts from './Pages/Foods/Breakfasts/Breakfasts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home />}>
          <Route path='/home/breakfast' element={<Breakfasts />}></Route>
          <Route path='/home/lunch' element={<Lunchs />}></Route>
          <Route path='/home/dinner' element={<Dinners />}></Route>
        </Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
