import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';

import './App.css'

const Auto = () => {
  return <h1>Каталог Автомобилей</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auto' element={<Auto />} />
      </Route>
    </Routes>
  );
}

export default App
