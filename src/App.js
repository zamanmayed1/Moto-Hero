import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componets/Home/Home'
import Dashboard from './componets/Dashboard/Dashboard'
import Reviews from './componets/Reviews/Reviews'
import Header from './componets/Header/Header';
import Errorpage from './componets/Errorpage/Errorpage';
import Blog from './componets/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='*' element={<Errorpage></Errorpage>}></Route>
    </Routes>
    </div>
  );
}

export default App;
