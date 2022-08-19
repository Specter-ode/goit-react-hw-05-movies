import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Container from './/Container/Container';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviePage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

export default App;
