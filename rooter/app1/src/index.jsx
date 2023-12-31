import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Article from './Ordinateurs/Article';
import ArticleDetail from './Ordinateurs/ArticleDetail';
import 'bootstrap/dist/css/bootstrap.css';

const ordinateurs = [
  { id: 1, libelle: 'HP i7 13eme', prix: 7200, img: 'img1.png' },
  { id: 2, libelle: 'Mac M2 1t', prix: 10400, img: 'img2.png' },
  { id: 3, libelle: 'Dell i5 ', prix: 20000, img: 'img3.png' },
  { id: 4, libelle: 'Mac M2 1t', prix: 30400, img: 'img4.png' }
];

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Article ordinateurs={ordinateurs} />} />
      <Route path="/article/:id" element={<ArticleDetail ordinateurs={ordinateurs} />} />
    </Routes>
  </Router>
);

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
