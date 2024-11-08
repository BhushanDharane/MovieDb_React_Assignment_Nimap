import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TopRatedPage from './components/TopRatedPage';
import UpcomingPage from './components/UpcomingPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import SearchPage from './components/SearchPage';
import './App.css';

const App = () => {
  return (
    <Router>
   <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie" element={<MovieDetailsPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        </Routes>
</Router>
  )
}

export default App