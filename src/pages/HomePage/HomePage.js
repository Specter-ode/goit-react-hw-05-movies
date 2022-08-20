import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';
import s from './HomePage.module.css'
const HomePage = () => {
  return (
    <main>
      <h2 className={s.title}>Trending today</h2>
      <TrendingMovies />
    </main>
  );
};

export default HomePage;
