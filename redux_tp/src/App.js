import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListSalaries from './composents/ListSalaries';
import AjouterSalarier from './composents/AjouterSalarier';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<ListSalaries />}/>
          <Route index path='/AjouterSalarier' element={<AjouterSalarier />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
